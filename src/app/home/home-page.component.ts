import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ResultStore } from '@/app/result-store.service';
import { ConversionFormComponent } from './conversion-form.component';

import { NumberConverter } from '@/lib/number-converter.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ConversionFormComponent],
  template: `
    <main>
      <app-conversion-form (submitEvent)="handleSubmit($event)" />
    </main>
  `,
})
export class HomePageComponent {
  constructor(
    private resultStore: ResultStore,
    private numberConverter: NumberConverter,
    private router: Router
  ) {}

  handleSubmit(financialNumber: string) {
    try {
      const result = this.numberConverter.convert(financialNumber);
      this.resultStore.saveResult(result);
      this.router.navigate(['/result']);
    } catch (error) {
      this.handleConversionError(error);
    }
  }

  private handleConversionError(error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert('Something went wrong. Please try again.');
    }
  }
}
