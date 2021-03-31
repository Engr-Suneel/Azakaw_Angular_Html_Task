import { Component } from '@angular/core';
import { EventService } from './core/services/event.service';
import { Constants } from './helper/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private eventService: EventService
  ){
    this.eventService.subscribe(Constants.EVENT_UPDATE_USERNAME, (title) => {
      console.log(title);
      setTimeout(() => {
        this.eventService.broadcast(Constants.EVENT_UPDATE_USERNAME_TOP_BAR, title);
      }, 1000);
    });
  }
}
