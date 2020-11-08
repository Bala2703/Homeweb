import { Component, OnInit,Input } from '@angular/core';
import { FloorService } from '../services/floor.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
_name=0;
_floorIndex=0;
floorJson;
_switchIndex=0;
  constructor(private _roomdata:FloorService) { }

  @Input()
  get roomIndex(): number {return this._name}
  set roomIndex(roomIndex:number) {
    this._name = roomIndex || 0;

  }
@Input()
get floorIndex():number{return this._floorIndex}
set floorIndex(floorIndex:number)
{
  this._floorIndex=floorIndex || 0
}
@Input()
get switchIndex():number{return this._switchIndex}
set switchIndex(switchIndex:number)
{
  this._switchIndex=switchIndex || 0
}
  ngOnInit(): void {
    this._roomdata.getFloors()
    .subscribe((data) => (this.floorJson = data));
  }

}
