import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { CommunicationService } from "./services/communication.service";

import { ResizedEvent } from 'angular-resize-event';
 import { MediaObserver,MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'home';

  public message="";
acceptData(data){
  console.log(data);
}

constructor(public mediaObserver:MediaObserver,
  private communicationService: CommunicationService,private router:Router
  ) {

  communicationService.changeEmitted$.subscribe(data => {console.log(data)
if (data=="Home") {


    this.router.navigateByUrl('/HomeAutomation');
}

if (data=="title") {
  this.router.navigateByUrl('/Home')
}
    // here fetch data from the session storage
  })
}



 }

