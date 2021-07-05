import { Component, ElementRef } from '@angular/core';
import { timelineInfo, ITimelineInfo } from "./timelineInfo";
@Component({
  selector: 'app-timeline-list',
  template: `
    <div class="main-container">
      <app-timeline *ngFor="let item of list" [timelineInfo]="item"></app-timeline>
    </div>
  `,
  styles: [
    `
      .main-container {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class TimelineListComponent {
  public list: ITimelineInfo[] = timelineInfo;
  constructor(private readonly hostElement: ElementRef<HTMLElement>) {
  }
}
