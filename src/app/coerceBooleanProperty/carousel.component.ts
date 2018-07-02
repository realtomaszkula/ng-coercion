import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div>Autoplay: {{ autoplay ? 'ON' : 'OFF'}}</div>
  `
})
export class CarouselComponent {
  private _autoplay: boolean;
  get autoplay(): boolean {
    return this._autoplay;
  }
  @Input()
  set autoplay(value: boolean) {
    this._autoplay = coerceBooleanProperty(value);
  }
}
