import { Player } from '../add-player/player';
import { RoundRequest } from '../round/round-request';
import { RoundResponse as RoundResult } from '../round/round-response';


export class Game {
  id: string;
  players: Player[];
  roundsRequests: RoundRequest[] ;
  roundsResults: RoundResult[] ;

  constructor() {
    this.players = new Array<Player>();
    this.roundsResults = new Array<RoundResult>();
  }
}
