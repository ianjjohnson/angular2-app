import { Component } from '@angular/core';
import {Box} from '../box';
import {BoxService} from '../box.service';

@Component({
  selector: 'app-box-app',
  templateUrl: './box-app.component.html',
  styleUrls: ['./box-app.component.css'],
  providers: [BoxService]
})
export class BoxAppComponent{

  constructor(private boxService: BoxService) { }

  get boxes() {
    return this.boxService.getBoxes();
  }

  addBox(){
    this.boxService.addBox(new Box());
  }

}
