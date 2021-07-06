import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { timelineInfo, ITimelineInfo } from "./timelineInfo";
@Component({
  selector: 'app-timeline-list',
  template: `
    <div class="main-container">
      <app-timeline *ngFor="let item of list" [timelineInfo]="item"></app-timeline>
      <div #listend style="height: 100px"></div>
    </div>
  `,
  styles: [
    `
      .main-container {
        display: flex;
        flex-direction: column;
        background-color: cadetblue;
      }
    `,
  ],
})
export class TimelineListComponent implements AfterViewInit {
  public list: ITimelineInfo[] = timelineInfo;
  @ViewChild("listend") private listend!: ElementRef;
  constructor(private readonly hostElement: ElementRef<HTMLElement>) {
  
  }
  ngAfterViewInit(): void {
    // Infinite scroll with intersection observer
    const observer = new IntersectionObserver(([entry]) => {
      this.list = [...this.list, ...timelineInfo];
    }, {root: null});

    observer.observe(this.listend.nativeElement)
  }

}
