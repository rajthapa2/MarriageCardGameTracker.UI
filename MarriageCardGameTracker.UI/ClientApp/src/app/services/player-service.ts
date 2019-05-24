import { Injectable } from '@angular/core';
import { Player as Player } from "../add-player/player";

@Injectable() 
export class PlayerService {
  players = new Array<Player>();
  getPlayers() {
    return this.players;
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }
}
