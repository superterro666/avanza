import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SimpleTinyComponent } from './components/blog/simple-tiny.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


// ROUTING
import { APP_ROUTING } from './app.routes';

// SERVICES
import { LoginService } from './components/servicios/login.service';
import { BlogService } from './components/servicios/blog.service';
import { PortfolioService } from './components/servicios/portfolio.service';
import { UploadService } from './components/servicios/upload.service';
import { ShowComponent } from './components/show/show.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    SimpleTinyComponent,
    PortfolioComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
 ],
  providers: [LoginService,
  BlogService,
  PortfolioService,
  UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
