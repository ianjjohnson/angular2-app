import { Injectable } from '@angular/core';
import { Box} from './box';

@Injectable()
export class BoxService {

  boxes: Box[] = [];

  constructor() {}

  addBox(box: Box): BoxService {
    if(!box.title){
      box.title = "Default";
    }
    this.boxes.push(box);
    return this;
  }

  getBoxes(): Box[] {
    return this.boxes;
  }

}
