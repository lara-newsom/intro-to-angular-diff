import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-to-angular';

  myEventHandler(name: string){
    console.log('Event was emitted with value ', name)
  }
}
