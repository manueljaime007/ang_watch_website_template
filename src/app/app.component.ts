import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { FeatureSectionComponent } from "./components/feature-section/feature-section.component";
import { GallerySectionComponent } from "./components/gallery-section/gallery-section.component";
import { CtaSectionComponent } from "./components/cta-section/cta-section.component";
import { TestimonialSectionComponent } from "./components/testimonial-section/testimonial-section.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    FeatureSectionComponent,
    GallerySectionComponent,
    CtaSectionComponent,
    TestimonialSectionComponent
],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'ang_watch_website_template';
}
