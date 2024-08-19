import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResultStore {
  result: number = 0;

  getResult() {
    return this.result;
  }

  saveResult(result: number) {
    this.result = result;
  }
}
