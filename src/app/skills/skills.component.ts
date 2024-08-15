import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 75 },
    { name: 'PHP', value: 80 },
    { name: 'WordPress/CMS', value: 90 },
    { name: 'Photoshop', value: 55 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.animateProgressBars();
  }

  animateProgressBars(): void {
    this.skills.forEach((skill, index) => {
      setTimeout(() => {
        const progressBar = document.getElementById(`progress-bar-${index}`);
        if (progressBar) {
          progressBar.style.width = `${skill.value}%`;
        }
      }, 500); // delay to start animation
    });
  }
}

