import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent implements OnInit {
  @ViewChild('expCard', { static: true }) expCard!: ElementRef;

  experiences = [
    {
      role: 'System Engineer Intern',
      company: 'Infosys Ltd.',
      period: 'Dec 2025 - May 2026',
      description: [
        'Built a subscription billing platform using Java, Spring Boot, Angular and MySQL, handling workflows like subscription management, invoicing, and payments.',
        'Worked across backend APIs, database integration and frontend modules to create secure role-based experiences for admins and users.',
        'Collaborated in an Agile team using Git workflows, code reviews, and sprint-based development to ship features incrementally.',
      ],
    },
    {
      role: 'Research Intern (GenAI)',
      company: 'International Institute of Information Technology (IIIT), Hyderabad',
      period: 'May 2025 - Jul 2025',
      description: [
        'Worked on an ontology-driven GenAI system that transformed structured domain knowledge into draft Software Requirement Specification (SRS) documents.',
        'Integrated SPARQL queries with LLM workflows to automate parts of the requirement engineering process and reduce repetitive manual drafting.',
        'Built reusable ontology templates and mappings that could adapt across domains like healthcare, education, and business systems.',
      ],
    },
    {
      role: 'Web Application Development Intern',
      company: 'Talent Towers',
      period: 'May 2024 - Jul 2024',
      description: [
        'Helped build a multi-role HR management platform for employee skill tracking and performance workflows using a mix of no-code tooling and custom-developed components.',
        'Integrated modules, customized application flows, and worked on frontend/backend connectivity to support employee, manager, and admin experiences.',
        'Performed functional and performance testing using JMeter and TestComplete, identifying issues early and improving overall application stability.',
      ],
    },
  ];

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(this.expCard.nativeElement);
  }
}
