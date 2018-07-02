import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './coerceBooleanProperty/carousel.component';
import { CarouselExamplesComponent } from './coerceBooleanProperty/carousel-examples.component';
import { CounterComponent } from './coerceNumberProperty/counter.component';
import { CounterExamplesComponent } from './coerceNumberProperty/counter-examples.component';
import { WelcomeComponent } from './coerceArray/welcome.component';
import { WelcomeExamplesComponent } from './coerceArray/welcome-examples.component';
import { BorderedBoxComponent } from './coerceCssPixelValue/bordered-box.component';
import { BorderedBoxExamplesComponent } from './coerceCssPixelValue/bordered-box-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselExamplesComponent,
    CounterComponent,
    CounterExamplesComponent,
    WelcomeComponent,
    WelcomeExamplesComponent,
    BorderedBoxComponent,
    BorderedBoxExamplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'coerce-boolean', pathMatch: 'full' },
      { path: 'coerce-boolean', component: CarouselExamplesComponent },
      { path: 'coerce-number', component: CounterExamplesComponent },
      { path: 'coerce-array', component: WelcomeExamplesComponent },
      { path: 'coerce-css-pixel', component: BorderedBoxExamplesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
