import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { routes } from '@/app/app.routes';
import { ResultPageComponent } from './result-page.component';

describe('ResultPageComponent', () => {
  let component: ResultPageComponent;
  let fixture: ComponentFixture<ResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPageComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the result formatted with commas', () => {
    component.result = 100000.45;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Result: 100,000.45');
  });

  it('should show the result rounded to 2 decimals', () => {
    component.result = 100000.456;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Result: 100,000.46');
  });

  it('should have a link to "Go Back" to the home page', () => {
    const el: HTMLElement = fixture.nativeElement;
    const a = el.querySelector('a');
    expect(a?.textContent).toBe('Go Back');
    expect(a?.getAttribute('href')).toBe('/');
  });
});
