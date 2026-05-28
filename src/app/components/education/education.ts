import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent implements OnInit {

  @ViewChild('eduCard', { static: true }) eduCard!: ElementRef;

  education = [
    {
      institution: 'Kalinga Institute of Industrial Technology',
      location: 'Bhubaneswar, Odisha',
      degree: 'B. Tech, Computer Science & Engineering',
      period: '2022 - 2026',
      coursework: [
        'Data Structures and Algorithms', 'Database Management Systems',
        'Object-Oriented Programming','Operating Systems',
        'Artificial Intelligence'
      ]
    },
    {
      institution: 'Maharishi Vidya Mandir',
      location: 'Hyderabad, Telangana',
      degree: 'High School Graduation',
      period: '2014 - 2022',
      coursework: ['Math', 'Physics', 'Chemistry', 'English', 'Aptitude']
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

    observer.observe(this.eduCard.nativeElement);
  }
}