export class Player {

  name: string = "";
  alive: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


}
