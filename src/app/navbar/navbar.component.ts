import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    ngOnInit(): void {
    }

    toggleNav(nav :any): void {
      if(nav.opened) {
        nav.close();
      }else {
        nav.open();
      }
    }

}
