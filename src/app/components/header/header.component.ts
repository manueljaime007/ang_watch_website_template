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
    { id: 1, path: '#hero', text: 'Home' },
    { id: 2, path: '#about', text: 'About' },
    { id: 3, path: '#features', text: 'Features' },
    { id: 4, path: '#gallery', text: 'Gallery' },
    { id: 5, path: '#contact', text: 'Contact' },
  ];

  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
