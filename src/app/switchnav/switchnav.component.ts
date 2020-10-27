import { Component, Input, OnInit , Output,EventEmitter} from '@angular/core';
import { FloorService } from '../services/floor.service';
import { RoomNav } from '../services/roomnav';

@Component({
  selector: 'app-switchnav',
  templateUrl: './switchnav.component.html',
  styleUrls: ['./switchnav.component.css'],
})
export class SwitchnavComponent implements OnInit {
_name=0;
_floorIndex=0;
bala;
  floorJson;
  constructor(private _switchdata: FloorService) {}

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

// @Output() onClick = new EventEmitter();
  ngOnInit(): void {
    this._switchdata.getFloors().subscribe((data) => (this.floorJson = data));
    console.log(this.floorJson);
  }
onSelect(switchparams){
  this.bala=switchparams.floorIndex
}
}
