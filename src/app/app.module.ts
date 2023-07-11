import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { Component } from '@angular/core';

import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,CommonModule,ButtonModule, InputTextModule,PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
