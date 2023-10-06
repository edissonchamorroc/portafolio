import { Component, Input } from '@angular/core';
import { ArticleService } from './article/services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portafolio';

  constructor( private service: ArticleService){}

  public changeTheme:boolean = false;

  backgroundChange($event:string):void{

    const element = document.getElementById("main");

    this.changeTheme = !this.changeTheme;

    this.service.setflagBlackTheme(this.changeTheme);

    element!.classList.toggle($event);

  }
}
