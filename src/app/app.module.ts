import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ErrorMessagesComponent } from './common/error-messages/error-messages.component';
import { environment } from 'src/environments/environment';
import { LoaderComponent } from './component/loader/loader.component';
import { ItemComponent } from './item/item.component';
import { AgenciasService } from './core/app.agencias.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      ErrorMessagesComponent,
      LoaderComponent,
      ItemComponent,
      ItemDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
     AgenciasService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
