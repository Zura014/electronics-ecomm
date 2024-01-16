import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/authorization/login/login.component';
import { RegisterComponent } from './components/pages/authorization/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SlidesComponent } from './components/components/slides/slides.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopColumnContentComponent } from './components/components/top-column-content/top-column-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    SlidesComponent,
    TopColumnContentComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule, NgOptimizedImage, BrowserAnimationsModule, MatInputModule, MatFormFieldModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
