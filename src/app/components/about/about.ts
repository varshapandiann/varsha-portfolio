import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit {

  @ViewChild('aboutCard', { static: true }) aboutCard!: ElementRef;

  skills = {
  languages: [
    'Java',
    'SQL',
    'Python',
    'TypeScript',
    'JavaScript'
  ],

  frameworks: [
    'Spring Boot',
    'Angular',
    'REST APIs',
  ],

  tools: [
    'Git',
    'GitHub',
    'Postman',
    'JMeter',
    'MySQL',
  ],

  interests: [
    'Backend Engineering',
    'Scalable System Design',
    'Distributed Systems',
    'Full-Stack Development',
    'Generative AI',
    'Agentic AI'
  ],

  hobbies: [
    'Building Side Projects',
    'Graphic Designing',
    'Public Speaking',
    'Classical Dance'
  ]
};

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.aboutCard.nativeElement);
  }
}