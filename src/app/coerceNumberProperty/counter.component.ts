import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button mat-raised-button color="primary"(click)="decrement()">-</button>
    <span> {{ value }} </span>
    <button mat-raised-button color="primary"(click)="increment()">+</button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class CounterComponent {
  private _value: number;
  get value(): number {
    return this._value;
  }
  @Input()
  set value(value: number) {
    this._value = coerceNumberProperty(value, 0);
  }

  private _tick: number;
  get tick(): number {
    return this._tick;
  }
  @Input()
  set tick(value: number) {
    this._tick = coerceNumberProperty(value);
  }

  decrement() {
    this.value -= this.tick;
  }

  increment() {
    this.value += this.tick;
  }
}
