import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isShowDiv: boolean = false;

  toggleTheme(): void {
    this.isShowDiv = !this.isShowDiv;
    const element = document.getElementById("main-navbar");
    element!.classList.toggle("night-theme_button");

    const body = document.getElementsByName('body');
    
  }
}
