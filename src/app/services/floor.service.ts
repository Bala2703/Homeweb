import { Injectable } from '@angular/core';
import { FloorNav } from "../services/floornav";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FloorService {
private _url='./assets/floorjson.json'

constructor(private http:HttpClient) { }

  getFloors():Observable<FloorNav[]>{

    return this.http.get<FloorNav[]>(this._url)
}

}
