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
      title: 'Skin Tone Classification Using Deep Learning',
      description: 'Developed and trained 3 image classification models to classify skin tones, achieving up to 87% accuracy with k-fold cross-validation.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Skin+Tone+AI',
      techStack: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Jupyter Notebook'],
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Campus Placement Outcome Predictor',
      description: 'Built Random Forest and SVM models to predict student placement outcomes with 81.39% accuracy, involving feature scaling and hyperparameter tuning.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Placement+Predictor',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Google Colab'],
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Campus Event Hub',
      description: 'A full-stack MERN application for university students to discover, register for, and manage campus events with an admin dashboard.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Campus+Event+Hub',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN'],
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Personalized Learning Path Agent',
      description: 'An agentic AI system that creates customized learning paths for students based on their interests and goals, dynamically suggesting courses and projects.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Learning+Path+Agent',
      techStack: ['Agentic AI', 'LLM', 'GenAI', 'Python', 'React'],
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Clinical Trial RR Prediction',
      description: 'Analyzed a dataset of 450,000+ clinical trials. Engineered features and evaluated regression models using RMSE and R² metrics.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Clinical+Trial+ML',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Google Colab'],
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'AI Doodle Sketch Classifier',
      description: 'An interactive deep learning web app where users draw sketches on a canvas and the model predicts what the sketch is in real time.',
      image: 'https://placehold.co/600x400/041530/5892f5?text=Doodle+Classifier',
      techStack: ['Python', 'CNN', 'Keras', 'Streamlit', 'Vercel'],
      liveUrl: '#',
      sourceUrl: 'https://github.com/varshapandiann/ai-doodles-classifier'
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