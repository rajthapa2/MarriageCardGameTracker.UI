import Roundplayer = require("./round-player");
import RoundPlayer = Roundplayer.RoundPlayer;

export class RoundRequest {
  roundId: number;
  playersMaal: RoundPlayer[];

  constructor() {
    this.playersMaal = new Array<RoundPlayer>();
  }
}
