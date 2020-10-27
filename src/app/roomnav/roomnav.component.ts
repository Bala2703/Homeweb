import { Component, OnInit, Input } from '@angular/core';
import { FloorService } from '../services/floor.service';
import { RoomNav } from '../services/roomnav';
@Component({
  selector: 'app-roomnav',
  templateUrl: './roomnav.component.html',
  styleUrls: ['./roomnav.component.css'],
})
export class RoomnavComponent implements OnInit {
  floorJson;
  private floorId;
  public _roomIndex = 0;
  rxfloorIndex;
  roomIndex;
  @Input()
  get floorIndex(): number {
    return this._roomIndex;
  }
  set floorIndex(floorIndex: number) {
    this._roomIndex = floorIndex || 0;
    this.rxfloorIndex=floorIndex
  }

  // @Input('parentData') public name:number;
  constructor(private _roomdata: FloorService) {}

  ngOnInit(): void {
    this._roomdata.getFloors()
    .subscribe((data) => (this.floorJson = data));
    console.log(this.floorJson);
  }
  onSelect(roomparams) {
    // this.floorIndex = this.floorIndex;
    this.roomIndex = roomparams.roomIndex;

    console.log(roomparams.roomId);
  }
}
