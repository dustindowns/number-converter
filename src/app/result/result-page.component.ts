import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ResultStore } from '@/app/result-store.service';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  template: `
    <main>
      <p>Result: {{ result | number : '1.0-2' }}</p>
      <a routerLink="/">Go Back</a>
    </main>
  `,
})
export class ResultPageComponent implements OnInit {
  result = 0;

  constructor(private resultStore: ResultStore) {}

  ngOnInit() {
    this.result = this.resultStore.getResult();
  }
}
