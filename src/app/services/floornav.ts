import { ArrayType } from '@angular/compiler';

export interface FloorNav{
 floorName: String,
 floorIndex:number,
 rooms:Array<room>
}

class room{
    roomId:String
}

