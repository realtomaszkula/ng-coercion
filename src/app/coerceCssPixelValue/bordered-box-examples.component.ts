import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bordered-box-examples',
  template: `
  <section>
    <header>borderWidth: 16</header>
    <app-bordered-box [borderWidth]="16">
      Mollit officia velit magna proident quis commodo incididunt non veniam.
    </app-bordered-box>
  </section>

  <section>
    <header>borderWidth: '16px'</header>
    <app-bordered-box borderWidth="16px">
      Pariatur non ad cupidatat esse velit eiusmod enim minim Lorem eu sunt sint nisi.
    </app-bordered-box>
  </section>

  <section>
    <header>borderWidth: '1em'</header>
    <app-bordered-box borderWidth="1em">
      Sint consectetur sint laborum aute officia voluptate eiusmod aute.
    </app-bordered-box>
  </section>

  <section>
    <header>borderWidth: '1rem'</header>
    <app-bordered-box borderWidth="1rem">
      Proident aliquip consequat do do minim eu adipisicing ullamco exercitation. 
    </app-bordered-box>
  </section>
  `,
  styles: [
    `
      section {
        margin-bottom: 32px;
      }

      header {
        margin-bottom: 16px;
      }
    `
  ]
})
export class BorderedBoxExamplesComponent {}
