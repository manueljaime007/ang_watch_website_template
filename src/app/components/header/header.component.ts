import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  LOGO = 'LUX';


  NAV_LINKS = [
    { id: 1, path: '#', text: 'Home' },
    { id: 2, path: '#', text: 'About' },
    { id: 3, path: '#', text: 'Features' },
    { id: 4, path: '#', text: 'Gallery' },
    { id: 5, path: '#', text: 'Contact' },
  ];

  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
