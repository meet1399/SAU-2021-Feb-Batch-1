import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { AusessionAddComponent } from './ausession-add/ausession-add.component';
import { AusessionListComponent } from './ausession-list/ausession-list.component';
import { AusessionEditComponent } from './ausession-edit/ausession-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AusessionAddComponent,
    AusessionListComponent,
    AusessionEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
