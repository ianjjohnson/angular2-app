import { Component, Input } from '@angular/core';
import { Team } from '../team'
import { Player } from '../player'


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: Team;

  constructor() { }

  getName(): string {
    return this.team.name;
  }

  get players() {
    return this.team.getPlayers();
  }

}
