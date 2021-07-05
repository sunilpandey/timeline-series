import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-timeline-list></app-timeline-list>
    </div>
  `
})
export class AppComponent {
  title = 'timeline';
}
