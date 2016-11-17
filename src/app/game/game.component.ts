import { Component } from '@angular/core';
import {Team} from '../team'
import {Player} from '../player'
import {GameService} from '../game.service'
import {TeamComponent} from '../team/team.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent {

  constructor(private gameService: GameService) { }

  get teams() {
    return this.gameService.getTeams();
  }

  addTeam() {
    this.gameService.addTeam(new Team());
  }

  addPlayerToTeam(team: number) {
    this.gameService.addPlayerToTeam(team);
  }

}
