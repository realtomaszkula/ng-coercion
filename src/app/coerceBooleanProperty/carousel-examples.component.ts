import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-examples',
  template: `
  <section>
    <header>autoplay: true</header>
    <app-carousel [autoplay]="true"></app-carousel>
  </section>

  <section>
    <header>autoplay: ""</header>
    <app-carousel autoplay></app-carousel>
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
export class CarouselExamplesComponent {}
