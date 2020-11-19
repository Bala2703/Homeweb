import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { CommunicationService } from "../services/communication.service";
@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  @Input() deviceXs:boolean;

  constructor(
    private communicationService: CommunicationService) { }

  ngOnInit(): void {
  }

  onSelect() {
    // emit data to parent component
    this.communicationService.emitChange("Home");

  }

}
