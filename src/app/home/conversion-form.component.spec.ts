import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionFormComponent } from './conversion-form.component';

const selectUserInput = (element: HTMLElement): HTMLInputElement =>
  element.querySelector('input#financialNumber')!;

const selectSubmitButton = (element: HTMLElement): HTMLButtonElement =>
  element.querySelector('button[type="submit"]')!;

describe('ConversionFormComponent', () => {
  let component: ConversionFormComponent;
  let fixture: ComponentFixture<ConversionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with initial state', () => {
    const userInput = selectUserInput(fixture.nativeElement);
    const submitButton = selectSubmitButton(fixture.nativeElement);

    expect(userInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(submitButton.disabled).toBeTrue();
  });

  it('should enable the submit button when form is valid', async () => {
    const userInput = selectUserInput(fixture.nativeElement);
    const submitButton = selectSubmitButton(fixture.nativeElement);

    expect(submitButton.disabled).toBeTrue();

    userInput.value = '123k';
    userInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalse();
  });

  it('should disable the submit button when form is invalid', async () => {
    const userInput = selectUserInput(fixture.nativeElement);
    const submitButton = selectSubmitButton(fixture.nativeElement);

    expect(submitButton.disabled).toBeTrue();

    userInput.value = '123g';
    userInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBeTrue();
  });

  it('should emit submitEvent with valid user input', async () => {
    const userInput = selectUserInput(fixture.nativeElement);
    const submitButton = selectSubmitButton(fixture.nativeElement);
    spyOn(component.submitEvent, 'emit');

    userInput.value = '123k';
    userInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    submitButton.click();

    expect(component.submitEvent.emit).toHaveBeenCalledWith(userInput.value);
  });

  it('should not emit submitEvent with invalid user input', async () => {
    const userInput = selectUserInput(fixture.nativeElement);
    const submitButton = selectSubmitButton(fixture.nativeElement);
    spyOn(component.submitEvent, 'emit');

    userInput.value = '123c';
    userInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    submitButton.click();

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
  });
});
