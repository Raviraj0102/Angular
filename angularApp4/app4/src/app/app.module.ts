import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomizestyledirectivesDirective } from './customizestyledirectives.directive';
import { RenderCustomiseStyleDirectivesDirective } from './render-customise-style-directives.directive';
import { EventDirectivesDirective } from './event-directives.directive';
import { EventDirectives1Directive } from './event-directives1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CustomizestyledirectivesDirective,
    RenderCustomiseStyleDirectivesDirective,
    EventDirectivesDirective,
    EventDirectives1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
