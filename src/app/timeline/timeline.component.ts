import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { ITimelineInfo } from './timelineInfo';

@Component({
  selector: 'app-timeline',
  template: `
      <div class="timecard-item">
        <div class="date-item">
          <span>20-07-2021</span>
        </div>
        <div class="middle">
          <div class="top mark-item"></div>
          <div class="bottom mark-item"></div>
        </div>
        <app-timeline-card class="timecard-component" 
          [title]="timelineInfo.title" 
          [description]="timelineInfo.description"></app-timeline-card>
      </div>
  `,
  styles: [
    `
      @padding-timeline: 10px;
      .timecard-component {
        flex: 1 1 50%;
        padding: @padding-timeline;
      }

      :host:nth-child(2n + 2) .timecard-item {
        flex-direction: row-reverse;
        .date-item {
          text-align: left;
        }
      }

      .date-item {
        flex: 1 1 50%;
        text-align: right;
        padding: @padding-timeline;
      }

      .timecard-item {
        display: flex;
        gap: 10px;
        color: white;
      }

      .middle {
        position: relative;
        flex: 0 0 3px;
        background-color: black;
        .bottom {
           display: none;
           bottom: 0;
        }
      }

      :host:last-child .bottom {
        display: block;
      }

      .middle .mark-item {
        position: absolute;
        background-color: red;
        width: 15px;
        height: 15px;
        left: 50%;
        border-radius: 50%;
        transform: translateX(-50%);
      }
    `,
  ],
})
export class TimelineComponent implements AfterViewInit {
  @Input() public timelineInfo!: ITimelineInfo;
  constructor(private readonly hostElement: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    const { nativeElement } = this.hostElement;
    const observer = new IntersectionObserver((entries, observer) => 
      entries.forEach(entry => {
        entry
      }), {
      root: null,
      threshold: [0.1, 0.6, 0.8, 1]
    });

    const elements = Array.from(nativeElement.getElementsByClassName('timecard-item'));
    observer.observe(elements[0]);
    elements.forEach(item => {
      observer.observe(item);
    });
  }
}
