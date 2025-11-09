import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from "./components/about-section/about-section.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent
],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'ang_watch_website_template';
}
