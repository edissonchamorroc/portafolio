import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portafolio';

  public backTheme:boolean = false;

  backgroundChange($event:string):void{

    const element = document.getElementById("main");

    this.backTheme = !this.backTheme;

    element!.classList.toggle($event);

  }
}
