import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-examples',
  template: `
  <section>
    <header>value: 100, tick: 5</header>
    <app-counter [value]="100" [tick]="5"></app-counter>
  </section>

  <section>
    <header>value: '100', tick: '5'</header>
    <app-counter value="100" tick="5"></app-counter>
  </section>

  <section>
    <header>value: 'not a number', tick: '5'</header>
    <app-counter value="not a number" tick="5"></app-counter>
  </section>
  `,
  styles: [
    `
      section {
        margin-bottom: 16px;
      }

      header {
        margin-bottom: 4px;
      }
    `
  ]
})
export class CounterExamplesComponent {}
