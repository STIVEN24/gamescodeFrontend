import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// modules
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
//

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HeaderComponent } from './components/public/header/header.component';
import { GameComponent } from './components/client/game/game.component';
import { AboutComponent } from './components/client/about/about.component';
// 

// services
import { GameService } from './services/game.service';
import { IpsUserService } from './services/ipUser.service';
// 

// pipes
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SafePipe } from './pipes/safe.pipe';
// 

// elements
import { DialogContentExampleDialog } from './elements/dialogWelcome/dialog-welcome.component';

// 

// models
// 

@NgModule({
  declarations: [
    // components
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GameComponent,
    AboutComponent,
    // 

    // elements
    DialogContentExampleDialog,
    // 

    // pipes
    TimeAgoPipe,
    SafePipe
    // 
  ],
  imports: [
    // modoules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
    // 
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  providers: [
    // services
    GameService,
    IpsUserService
    // 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
