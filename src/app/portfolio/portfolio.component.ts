import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  activeFilter: string = '*';
  portfolioItems: any[] = [
    { id: 1, type: 'filter-app', img: 'assets/img/portfolio/portfolio-1.jpg', title: 'App 1', detailsLink: 'portfolio-details.html' },
    { id: 2, type: 'filter-web', img: 'assets/img/portfolio/portfolio-2.jpg', title: 'Web 3', detailsLink: 'portfolio-details.html' },
    { id: 3, type: 'filter-app', img: 'assets/img/portfolio/portfolio-3.jpg', title: 'App 2', detailsLink: 'portfolio-details.html' },
    { id: 4, type: 'filter-card', img: 'assets/img/portfolio/portfolio-4.jpg', title: 'Card 2', detailsLink: 'portfolio-details.html' },
    { id: 5, type: 'filter-web', img: 'assets/img/portfolio/portfolio-5.jpg', title: 'Web 2', detailsLink: 'portfolio-details.html' },
    { id: 6, type: 'filter-app', img: 'assets/img/portfolio/portfolio-6.jpg', title: 'App 3', detailsLink: 'portfolio-details.html' },
    { id: 7, type: 'filter-card', img: 'assets/img/portfolio/portfolio-7.jpg', title: 'Card 1', detailsLink: 'portfolio-details.html' },
    { id: 8, type: 'filter-card', img: 'assets/img/portfolio/portfolio-8.jpg', title: 'Card 3', detailsLink: 'portfolio-details.html' },
    { id: 9, type: 'filter-web', img: 'assets/img/portfolio/portfolio-9.jpg', title: 'Web 3', detailsLink: 'portfolio-details.html' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
  }

  isItemVisible(itemType: string): boolean {
    return this.activeFilter === '*' || itemType === this.activeFilter;
  }
}