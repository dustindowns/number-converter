import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { VALID_FINANCIAL_NUMBER } from '@/lib/regex';

@Component({
  selector: 'app-conversion-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    fieldset {
      padding: 1.5rem;

      > div {
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `,
  template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <fieldset>
        <legend>
          Input an abbreviated number <i>e.g. - 100k</i> and press the "Convert
          Number" button to convert it to the full number.
        </legend>

        <div>
          <label for="financialNumber">Financial Number</label>
          <input
            id="financialNumber"
            type="text"
            name="financialNumber"
            formControlName="financialNumber"
          />

          <button type="submit" [disabled]="!form.valid">Convert Number</button>
        </div>
      </fieldset>
    </form>
  `,
})
export class ConversionFormComponent {
  @Output() submitEvent = new EventEmitter<string>();

  form = new FormGroup({
    financialNumber: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(VALID_FINANCIAL_NUMBER),
      ],
    }),
  });

  handleSubmit() {
    const { financialNumber } = this.form.value;
    if (this.form.valid) {
      this.submitEvent.emit(financialNumber);
    }
  }
}
