import { Component, Input, OnInit } from '@angular/core';
import { coerceArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-welcome',
  template: `
  <div *ngFor="let name of names">
    Welcome {{ name }}!
  </div>
  `
})
export class WelcomeComponent {
  private _names: string[];
  get names(): string[] {
    return this._names;
  }
  @Input()
  set names(value: string[]) {
    this._names = coerceArray(value);
  }
}
