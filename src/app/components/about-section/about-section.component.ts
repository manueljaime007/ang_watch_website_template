import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  subtitle = 'About Our Craftmanship';

  text = `Discover the philosophy behind our timepieces, where every detail is meticulously crafted from the most premium materials. Our commitment to excellence ensures each watch is not just an instrument, but a work of art, a testament to enduring style and unparalleled quality.`;
}
