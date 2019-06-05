import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccTypeComponent } from './acc-type/acc-type.component';
import { AccPassComponent } from './acc-pass/acc-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import{Ng2SmartTableModule}from "ng2-smart-table";

import { 
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule, 
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
       } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AccTypeComponent,
    AccPassComponent,
    MyNavComponent,
    MyDashboardComponent
    

  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    NgxBarcodeModule,
   Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
