import {Player} from './player'

export class Team {

  players: Player[] = [];
  teamID: number = 0;
  name: string = "Team Name";

  constructor() {
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  getPlayers(): Player[] {
    return this.players;
  }

}
