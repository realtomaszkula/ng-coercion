import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <a mat-button routerLink="/coerce-boolean">coerceBooleanProperty</a>
    <a mat-button routerLink="/coerce-number">coerceNumberProperty</a>
    <a mat-button routerLink="/coerce-array">coerceArray</a>
    <a mat-button routerLink="/coerce-css-pixel">coerceCssPixelValue</a>
  </mat-toolbar>

  <main>
    <router-outlet></router-outlet>
  </main>
    
  `,
  styles: [
    `
      main {
        padding: 1em;
      }
    `
  ]
})
export class AppComponent {}
