import { Injectable } from '@angular/core';

import { VALID_FINANCIAL_NUMBER } from '@/lib/regex';

@Injectable({ providedIn: 'root' })
export class NumberConverter {
  convert(input: string | undefined): number | never {
    if (input === '' || input === undefined) {
      throw new Error('Input is required.');
    }

    const match = input.match(VALID_FINANCIAL_NUMBER);
    if (!match) {
      throw new Error(`Invalid input format: " ${input} ".`);
    }

    const numberPart = parseFloat(match[1]);
    const suffix = (match[3] as string | undefined)?.toLowerCase();
    const multiplier = this.getMultiplier(suffix);

    return numberPart * multiplier;
  }

  private getMultiplier(suffix: string | undefined) {
    if (!suffix) return 1;

    const multiplerMap: Record<string, number> = {
      k: 1_000,
      m: 1_000_000,
      b: 1_000_000_000,
    };

    if (suffix in multiplerMap) {
      return multiplerMap[suffix];
    }

    return 1;
  }
}
