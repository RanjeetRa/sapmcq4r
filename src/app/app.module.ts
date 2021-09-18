import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperComponent } from './helper/helper.component';
import { Sapecpart1Component } from './sapecpart1/sapecpart1.component';
import { HomeComponent } from './home/home.component';
import { SappgdmComponent } from './sappgdm/sappgdm.component';
import { Sapecpart2Component } from './sapecpart2/sapecpart2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelperComponent,
    Sapecpart1Component,
    HomeComponent,
    SappgdmComponent,
    Sapecpart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
