import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-timeline-list class="timeline-list"></app-timeline-list>
  `,
  styles: [`
    .timeline-list {
      display: block;
      position: absolute;
      left: 10%;
      right: 10%;
    }
  `]
})
export class AppComponent {
  title = 'timeline';
}
