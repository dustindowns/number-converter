import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  styles: `
    :host {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    header,
    div {
      text-align: center;
      padding: 1rem;
    }

    header {
      background-color: #1faafa;
      border-bottom: 2px solid black;
    }

    header span {
      text-decoration: underline;
    }

    div {
      max-width: 1024px;
      margin: 0 auto;
    }
  `,
  template: `
    <header>
      <h1>Number Converter</h1>
      <p>Coded by <span>Dustin Downs</span></p>
    </header>
    <div>
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
