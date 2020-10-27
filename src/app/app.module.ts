import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FloorService } from './services/floor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloornavComponent } from './floornav/floornav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RoomnavComponent } from './roomnav/roomnav.component';
import { SwitchnavComponent } from './switchnav/switchnav.component';
import { MatCardModule } from "@angular/material/card";
import { SwitchComponent } from './switch/switch.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    FloornavComponent,
    RoomnavComponent,
    SwitchnavComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,HttpClientModule,MatIconModule,MatSidenavModule,MatListModule,MatCardModule
  ],
  providers: [FloorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
