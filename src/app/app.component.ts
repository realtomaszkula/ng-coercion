import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="mat-elevation-z4">
    <a mat-button routerLink="/coerce-boolean">coerceBooleanProperty</a>
    <a mat-button routerLink="/coerce-number">coerceNumberProperty</a>
    <a mat-button routerLink="/coerce-array">coerceArray</a>
    <a mat-button routerLink="/coerce-css-pixel">coerceCssPixelValue</a>
  </header>

  <main>
    <router-outlet></router-outlet>
  </main>
    
  `,
  styles: [
    `
      main {
        padding: 1em;
      }

      header {
        padding: 12px;
        color: white;
        background-color: #3f51b5;
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 400px) {
        header {
          flex-direction: row;
        }
      }
    `
  ]
})
export class AppComponent {}
