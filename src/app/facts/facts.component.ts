import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  counters = [
    { icon: 'bi bi-emoji-smile', end: 232, label: 'Happy Clients', description: 'consequuntur quae', delay: 0 },
    { icon: 'bi bi-journal-richtext', end: 521, label: 'Projects', description: 'adipisci atque cum quia aut', delay: 100 },
    { icon: 'bi bi-headset', end: 1453, label: 'Hours Of Support', description: 'aut commodi quaerat', delay: 200 },
    { icon: 'bi bi-people', end: 32, label: 'Hard Workers', description: 'rerum asperiores dolor', delay: 300 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters() {
    this.counters.forEach((counter, index) => {
      setTimeout(() => {
        this.animateCounter(counter.end, index);
      }, counter.delay);
    });
  }

  animateCounter(end: number, index: number) {
    let start = 0;
    const duration = 1000;
    const increment = Math.ceil(end / duration * 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      document.getElementById(`counter-${index}`)!.textContent = start.toString();
    }, 10);
  }

}
