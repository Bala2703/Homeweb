import { Component, OnInit ,Output,EventEmitter,Input,OnDestroy} from '@angular/core';

import {Location} from '@angular/common';

import { FloorService } from '../services/floor.service';
import { CommunicationService } from "../services/communication.service";
import { ResizedEvent } from 'angular-resize-event';
import { Subscription } from "rxjs";
import { MediaChange,MediaObserver } from "@angular/flex-layout";
@Component({
  selector: 'app-floornav',
  templateUrl: './floornav.component.html',
  styleUrls: ['./floornav.component.css'],
})
export class FloornavComponent implements OnDestroy,OnInit {
  floorJson;
  mediaSub:Subscription;
  deviceXs:boolean;

  public txfloorIndex: number;
public hasError=true;
  @Output()public childEvent=new EventEmitter();
  constructor(private _floordata: FloorService ,private communicationService: CommunicationService,public mediaObserver:MediaObserver ) {}

  ngOnInit(): void {
    this._floordata
      .getFloors()

      .subscribe((data) => (this.floorJson = data));


      this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true:false;
      })
  }
  onSelect(floorparams) {
    this.txfloorIndex = floorparams.floorIndex;
    console.log(floorparams.floorName);

  }
  fireEvent(){
    this.communicationService.emitChange("title");
  }



  ngOnDestroy(){
  this.mediaSub.unsubscribe();
  }


}
