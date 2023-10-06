import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output()
  public backgroundChange: EventEmitter<string> = new EventEmitter<string>();

  public txtToggle: string = "sun-theme";

  public isShowDiv: boolean = false;

  toggleTheme(): void {

    this.isShowDiv = !this.isShowDiv;

    const element = document.getElementById("main-navbar");

    element!.classList.toggle(this.txtToggle);

    this.backgroundChange.emit(this.txtToggle);

  }

  toggleMenu():void{

    const element = document.getElementById("hamburger-menu");

    element!.classList.toggle("show");

  }
}
