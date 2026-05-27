import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { AboutComponent } from "./components/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('varsha-portfolio');
}
