import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

import {Location} from '@angular/common';

import { FloorService } from '../services/floor.service';
import { CommunicationService } from "../services/communication.service";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-floornav',
  templateUrl: './floornav.component.html',
  styleUrls: ['./floornav.component.css'],
})
export class FloornavComponent implements OnInit {
  floorJson;

  public txfloorIndex: number;

  @Output()public childEvent=new EventEmitter();
  constructor(private _floordata: FloorService ,private communicationService: CommunicationService ) {}

  ngOnInit(): void {
    this._floordata
      .getFloors()

      .subscribe((data) => (this.floorJson = data));
  }
  onSelect(floorparams) {
    this.txfloorIndex = floorparams.floorIndex;
    console.log(floorparams.floorName);

  }
  fireEvent(){
    this.communicationService.emitChange("title");
  }
}
