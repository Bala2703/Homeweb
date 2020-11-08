import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FloorService } from './services/floor.service';

import { AppRoutingModule,routingComponents } from './app-routing.module';
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
import { FlexLayoutModule } from "@angular/flex-layout";
import { TitlesComponent } from './titles/titles.component';
import { ClockComponent } from './clock/clock.component';

// import {  } from "module";

@NgModule({
  declarations: [
    AppComponent,
    FloornavComponent,
    RoomnavComponent,
    SwitchnavComponent,
    SwitchComponent,TitlesComponent, ClockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,FlexLayoutModule,
    MatButtonModule,HttpClientModule,MatIconModule,MatSidenavModule,MatListModule,MatCardModule
  ],
  providers: [FloorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
