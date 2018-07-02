import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-examples',
  template: `
  <section>
    <header>names: 'Robert'</header>
    <app-welcome names="Robert"></app-welcome>
  </section>

  <section>
    <header>names: ['Robert', 'John']</header>
    <app-welcome [names]="['Robert', 'John']"></app-welcome>
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
export class WelcomeExamplesComponent {}
