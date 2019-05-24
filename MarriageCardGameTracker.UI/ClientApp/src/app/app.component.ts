import { Component } from '@angular/core';
import { Player as Player } from "./add-player/player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public players: Player[];
}
