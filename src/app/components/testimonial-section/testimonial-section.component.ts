import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  imports: [],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss',
})
export class TestimonialSectionComponent {
  title = 'What Our Customers Say';
  text = `Don't just take our word foir it. Hear from those who have experienced the LUX diference.`;

  testimonials = [
    {
      id: 1,
      text: 'An absolute masterpiece of design and enginering. It feels incredible on the wrist and gets comliments everywhere I go.',
      author: 'Alex Johnson',
      starsCount: 5,
    },
    {
      id: 2,
      text: 'The quality is undeniable. From the packagin to the watch itself, everything screams luxury. Worth every penny',
      author: 'Samanta Lee',
      starsCount: 4,
    },
    {
      id: 2,
      text: `I've owned many high-end watches, but my LUX is my favorite. It's the perfect blend of classic style and modern tech`,
      author: 'Michael Chan',
      starsCount: 3,
    },
  ];
  getStars(count: number) {
    return Array(count);
  }
}
