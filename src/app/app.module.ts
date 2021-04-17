import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { SpotCardComponent } from './card-display/spot-card/spot-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDisplayComponent,
    SpotCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
