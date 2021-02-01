import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassSchoolComponent } from './class-school/class-school.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EightComponent } from './eight/eight.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
@NgModule({
  declarations: [
    AppComponent,
    ClassSchoolComponent,
    HomeComponent,
    EightComponent,
    NineComponent,
    TenComponent,
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
