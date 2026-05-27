import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { AboutComponent } from "./components/about/about";
import { ExperienceComponent } from "./components/experience/experience";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AboutComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('varsha-portfolio');
}
