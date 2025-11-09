import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  ANO_ATUAL = new Date().getFullYear();
  LOGO = 'LUX';
  logo_text = 'Creating the future of timekeeping';
  copy_text = `
    ${this.ANO_ATUAL} ${this.LOGO} Watches. All Rights Reserved.
  `;

  nav_links = [
    { id: 1, path: '#hero', text: 'Home' },
    { id: 2, path: '#about', text: 'About' },
    { id: 3, path: '#features', text: 'Features' },
    { id: 4, path: '#gallery', text: 'Gallery' },
    { id: 5, path: '#contact', text: 'Contact' },
  ];

  legal_links = [
    { id: 1, path: '#hero', text: 'Privacy Policy' },
    { id: 2, path: '#hero', text: 'Terms of Service' },
    { id: 3, path: '#hero', text: 'Warranty' },
  ];

  social_links = [
    {
      id: 1,
      brand: 'fa-brands fa-github',
      link: 'https://github.com/manueljaime007',
    },
    {
      id: 2,
      brand: 'fa-brands fa-linkedin',
      link: 'https://www.linkedin.com/in/manuel-jaime-816a8536b',
    },
    {
      id: 3,
      brand: 'fa-brands fa-instagram',
      link: 'https://www.instagram.com/manuel_jaime007',
    },
    {
      id: 4,
      brand: 'fa-brands fa-discord',
      link: 'https://discord.com/channels/@me',
    },
  ];

}2
