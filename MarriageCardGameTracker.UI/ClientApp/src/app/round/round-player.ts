export class RoundPlayer {
  name: string;
  totalMaal: number;
  maalSeen: boolean;
  gameWon: boolean;
  isDubliee: boolean;

  constructor() {
    this.name = "";
    this.gameWon = false;
    this.maalSeen = false;
    this.isDubliee = false;
  }
}
