import {RoundPlayer} from './round-player';

export class RoundRequest {
  roundId: number;
  playersMaal: RoundPlayer[];

  constructor() {
    this.playersMaal = new Array<RoundPlayer>();
  }
}
