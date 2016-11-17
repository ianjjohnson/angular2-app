export class Player {

  name: string = "Player Name";
  alive: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


}
