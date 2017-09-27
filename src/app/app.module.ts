import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent , ChargesComponent, CountersComponent, FBAComponent, MainComponent} from './_support/index';
import { ParametersComponent , PaymentComponent, PaysComponent, RecalculationsComponent, TariffsComponent} from './_support/index';

import { ServicesRest, RoutsRoot  } from './_support/index';

@NgModule({
  declarations: [
    AppComponent,
    ChargesComponent,
    CountersComponent,
    FBAComponent,
    MainComponent,
    ParametersComponent,
    PaymentComponent,
    PaysComponent,
    RecalculationsComponent,
    TariffsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule//,
    //RouterModule.forRoot(RoutsRoot)
  ],
  providers: [ServicesRest],
  bootstrap: [AppComponent]
})
export class AppModule { }
