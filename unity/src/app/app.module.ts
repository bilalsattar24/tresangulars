import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdpComponent } from './cdp/cdp.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { EditcdpsComponent } from './editcdps/editcdps.component';

@NgModule({
  declarations: [
    AppComponent,
    CdpComponent,
    AccordionComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    SearchfilterComponent,
    EditcdpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
