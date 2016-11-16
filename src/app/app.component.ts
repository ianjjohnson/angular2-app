import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  title2= 'second title!';

  enter(num){
    if(num == 1){
      this.title = "You hit Enter!";
    } else {
      this.title2= "You hit Enter2!";
    }
  }
}
