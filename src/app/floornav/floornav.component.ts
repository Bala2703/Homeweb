import { Component, OnInit } from '@angular/core';

import { FloorService } from '../services/floor.service';

@Component({
  selector: 'app-floornav',
  templateUrl: './floornav.component.html',
  styleUrls: ['./floornav.component.css'],
})
export class FloornavComponent implements OnInit {
  floorJson;

  public txfloorIndex: number;

  constructor(private _floordata: FloorService) {}

  ngOnInit(): void {
    this._floordata
      .getFloors()

      .subscribe((data) => (this.floorJson = data));
  }
  onSelect(floorparams) {
    this.txfloorIndex = floorparams.floorIndex;
    console.log(floorparams.floorName);
  }
}
