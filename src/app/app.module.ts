import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { AllatainkComponent } from './allataink/allataink.component';

import { HttpClientModule } from '@angular/common/http';
import { UjAllatComponent } from './uj-allat/uj-allat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NyitoOldalComponent,
    AllatainkComponent,
    UjAllatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
