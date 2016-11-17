import { Component, Input } from '@angular/core';
import { Team } from '../team'
import { Player } from '../player'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input() player: Player;

  constructor() { }

}
