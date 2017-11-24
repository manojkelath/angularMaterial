import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import {
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    CdkTableModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
