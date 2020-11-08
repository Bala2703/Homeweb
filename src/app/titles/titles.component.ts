import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { CommunicationService } from "../services/communication.service";
@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {


  constructor(
    private communicationService: CommunicationService) { }

  ngOnInit(): void {
  }

  onSelect() {
    // emit data to parent component
    this.communicationService.emitChange("Home");

  }

}
