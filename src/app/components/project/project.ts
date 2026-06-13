import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectComponent implements OnInit {

  @ViewChild('projectSection', { static: true }) projectSection!: ElementRef;

  currentIndex = 0;
  cardWidth = 340; // card width + gap

  projects = [
  {
    title: 'Bloom & Bridge',
    description: '6-service microservices platform for soft skills learning with Spring Cloud Gateway, JWT auth, gamified XP tracking, and an Angular 17 frontend on Vercel.',
    image: 'https://placehold.co/600x400/041530/5892f5?text=Bloom+%26+Bridge',
    techStack: ['Java 21', 'Spring Boot 3', 'Angular 17', 'Spring Cloud Gateway', 'MySQL', 'JWT', 'TailwindCSS', 'Vercel'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Subscription Billing Management System',
    description: 'Full-stack billing platform with JWT-secured REST APIs, role-based access for 3 user types, automated invoicing, and an Angular frontend.',
    image: 'https://placehold.co/600x400/041530/5892f5?text=Billing+System',
    techStack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Spring Security', 'JWT', 'Spring Mail', 'JPA/Hibernate'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'DevPing — Real-Time Notification Service',
    description: 'Subscribe to build, PR, and deployment events and get real-time in-app alerts via WebSockets, with notification history and read/unread tracking.',
    image: 'https://placehold.co/600x400/041530/5892f5?text=DevPing',
    techStack: ['Java', 'Spring Boot', 'WebSockets', 'STOMP', 'Angular', 'MySQL', 'JWT'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'URL Shortener with Analytics',
    description: 'Shorten URLs with per-link click analytics, custom slugs, expiry dates, and a Redis-cached redirect layer for fast lookups.',
    image: 'https://placehold.co/600x400/041530/5892f5?text=URL+Shortener',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'REST APIs', 'Swagger'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Roast My Dev Profile',
    description: 'Paste your GitHub username and get an AI-powered roast of your developer profile — weak repos, missing READMEs, skill gaps — with real fixes.',
    image: 'https://placehold.co/600x400/041530/5892f5?text=Roast+My+Profile',
    techStack: ['Angular', 'Spring Boot', 'GitHub API', 'Gemini API', 'TailwindCSS'],
    liveUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Campus Placement Outcome Predictor',
    description: 'Random Forest and SVM models predicting student placement outcomes with 81.39% accuracy via feature scaling and hyperparameter tuning.',
    image: 'projects/placement-predictor.png',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Google Colab'],
    liveUrl: 'https://campus-placement-predictor.streamlit.app/',
    sourceUrl: 'https://github.com/varshapandiann/Campus-Placement-Prediction'
  }
];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.projectSection.nativeElement);
  }

  prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.projects.length - 3;
  }
}

next() {
  if (this.currentIndex < this.projects.length - 3) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}
}