import { Component } from '@angular/core';
import AddPlayerComponent = require("./add-player/add-player.component");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public players: AddPlayerComponent.Player[];
}
