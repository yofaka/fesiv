import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SIVsComponent } from './sivs/sivs.component';
import {FormsModule} from '@angular/forms';
import { SivDetailComponent } from './siv-detail/siv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SIVsComponent,
    SivDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
