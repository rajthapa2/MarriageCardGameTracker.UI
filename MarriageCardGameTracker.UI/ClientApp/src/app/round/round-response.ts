export class RoundResponse {

  roundId: number;
  totalMaal: number;
  result : RoundResponsePlayer[];
}


export class RoundResponsePlayer {
  name: string;
  calculatedValue: number;
  gameWon: boolean;
  maalSeen: boolean;
}
