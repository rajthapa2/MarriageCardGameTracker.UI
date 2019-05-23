import { Component } from '@angular/core';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html' 
})

export class AddPlayerComponent {
  numberOfPlayer: number;
  players: Player[];

  constructor() {
    this.players = new Array<Player>();
  }

  onChange(i: number) {
    this.numberOfPlayer = i;
    this.players = new Array<Player>();

    for (var y = 0; y < this.numberOfPlayer; y++) {
        this.players.push(this.createPlayer());
      }
  }
  
  ngOnInit() {

  }

  private createPlayer() {
    return new Player();
  }
}


export class Player {
  name: string;

  constructor() {
    this.name = "";
  }
}
