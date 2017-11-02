import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './platform.component';
import { PlatformDetailComponent } from './platform.detail.component';
import { PlatformService } from './platform.service';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page_not_found.component'

@NgModule({
  declarations: [
      AppComponent,
      PlatformComponent,
      PlatformDetailComponent,
      LoginComponent,
      PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [ PlatformService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
