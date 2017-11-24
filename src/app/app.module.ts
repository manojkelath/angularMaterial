import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PaginatedListComponent } from './paginated-list/paginated-list.component';

import {
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    PaginatedListComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    CdkTableModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
