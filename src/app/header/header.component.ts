import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize AOS
    AOS.init({
      duration: 800, // Customize as needed
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  }

  ngAfterViewInit(): void {
    // Initialize Typed.js after the view is fully initialized
    const typedElement = document.querySelector('.typed') as HTMLElement;
    const typedItems = typedElement?.getAttribute('data-typed-items')?.split(',') || [];

    new Typed('.typed', {
      strings: typedItems,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  }
}
