import { Injectable } from '@angular/core';
import {Team} from './team'
import {Player} from './player'

@Injectable()
export class GameService {

  teams: Team[] = []

  constructor() { }

  addTeam(team: Team): GameService {
    this.teams.push(team);
    return this;
  }

  getTeams(): Team[] {
    return this.teams;
  }

  addPlayerToTeam(teamNum: number) {

  }

}
