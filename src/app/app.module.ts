import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineCardComponent } from './timeline/timeline-card.component';
import { TimelineListComponent } from './timeline/timeline-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineCardComponent,
    TimelineListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
