import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home";
import { AboutComponent } from "./components/about/about";
import { ExperienceComponent } from "./components/experience/experience";
import { EducationComponent } from './components/education/education';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, ExperienceComponent, EducationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('varsha-portfolio');
}
