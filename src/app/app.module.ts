import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Material2Module} from './material.module';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpClientJsonpModule}     from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
        import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DialogComponent} from "./dialog/dialog.component";


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Material2Module,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,

        

  ],
 providers: [
     { provide: MAT_DIALOG_DATA, useValue: {} },
     { provide: MatDialogRef, useValue: {} },

  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

   bootstrap: [AppComponent]
})
export class AppModule { }
