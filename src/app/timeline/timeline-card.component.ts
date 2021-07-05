import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  template: `
    <div class="main-container">
      <h3><span>{{title}}</span></h3>
      <div><span>{{description}}</span></div>
    </div>
  `,
  styles: [`
    .main-container {
      padding: 10px;
    }
  `
  ]
})
export class TimelineCardComponent implements OnInit {
  @Input() public title!: string;;
  @Input() public description!: string;
  private colors = [];
  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry], observer) => {
      if(entry.intersectionRatio <= 0.3) {
        this.host.nativeElement.style.opacity = "0"; 
      } else if(entry.intersectionRatio >= 0.3 && entry.intersectionRatio < 0.6) {
        this.host.nativeElement.style.opacity = "0.2"; 
      } else if(entry.intersectionRatio >= 0.6 && entry.intersectionRatio < 0.8) {
        this.host.nativeElement.style.opacity = "0.6";
      } else if(entry.intersectionRatio >= 0.8 && entry.intersectionRatio <= 1) {
        this.host.nativeElement.style.opacity = "1";
      }
    }
    , {
      root: null,
      threshold: [0, 0.3, 0.6, 0.8, 1]
    });

    observer.observe(this.host.nativeElement);
  }

}
