import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  ngOnInit(): void {
    AOS.init();
  }

}
