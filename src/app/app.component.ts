import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { CommunicationService } from "./services/communication.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  public message="";
acceptData(data){
  console.log(data);
}

constructor(
  private communicationService: CommunicationService,private router:Router
  ) {

  communicationService.changeEmitted$.subscribe(data => {console.log(data)
if (data=="Home") {


    this.router.navigateByUrl('/HomeAutomation');
}

if (data=="title") {
  this.router.navigateByUrl('/Home')
}
    // here fetch data from the session storage
  })
}
 }

