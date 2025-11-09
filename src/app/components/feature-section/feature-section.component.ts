import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  imports: [],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss',
})
export class FeatureSectionComponent {
  title = 'Key Features';
  text =
    'Engineered for perfection, our watches combine timeless design with modern innovation';

  featuresList = [
    {
      id: 1,
      subtitle: 'Water Resistance',
      body: 'Built to withstand the elements certified for up 100 meters',
      icon_class: 'fas fa-droplet',
    },
    {
      id: 2,
      subtitle: 'Extended Battery',
      body: 'Enjoy up to 30 days of battery life on a single charge',
      icon_class: 'fa-solid fa-battery-three-quarters',
    },
    {
      id: 3,
      subtitle: 'Bluetooh Sync',
      body: 'Seamlessly connect to your devices for notifications and updates',
      icon_class: 'fa-brands fa-bluetooth-b',
    },
    {
      id: 4,
      subtitle: 'Premium Materials',
      body: 'Crafted with sapphire crystal and surgical-grade stainless steel',
      icon_class: 'fas fa-gem',
    },
  ];
}
