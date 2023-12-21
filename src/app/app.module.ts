import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListTouristsComponent } from './list-tourists/list-tourists.component';
import { PackagesComponent } from './packages/packages.component';

var myRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "addtourist", component: AddTouristComponent },
  { path: "tourists", component: ListTouristsComponent },
  { path: "packages", component: PackagesComponent },
];

var myRoutes2 = RouterModule.forRoot(myRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTouristComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ListTouristsComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    myRoutes2,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, FooterComponent]
})
export class AppModule { }
