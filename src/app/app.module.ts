import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {SearchAppComponent} from './search-app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import { HttpClientModule} from '@angular/common/http';
import {SearchService} from './search.service';

@NgModule({
  declarations: [
    SearchAppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [SearchAppComponent]
})
export class AppModule { }
