export class RoundResponse {

  roundId: number;
  totalMaal: number;
  result : RoundResponsePlayer[];

  constructor() {

  }
}


export class RoundResponsePlayer {
  name: string;
  calculatedValue: number;
}
