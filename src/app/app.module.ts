import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './Basics/server/server.component';
import { ServersComponent } from './Basics/servers/servers.component';
import { WarningAlertComponent } from './Basics/Assignments/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Basics/Assignments/success-alert/success-alert.component';
import { LessonStartComponent } from './Components_and_Databinding/lesson-start/lesson-start.component';
import { LessonAssignmentComponent } from './Components_and_Databinding/lesson-assignment/lesson-assignment.component';
import { CockpitComponent } from './Components_and_Databinding/lesson-start/cockpit/cockpit.component';
import { ServerElementComponent } from './Components_and_Databinding/lesson-start/server-element/server-element.component';
import { GameControlComponent } from './Components_and_Databinding/lesson-assignment/game-control/game-control.component';
import { OddComponent } from './Components_and_Databinding/lesson-assignment/odd/odd.component';
import { EvenComponent } from './Components_and_Databinding/lesson-assignment/even/even.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    LessonStartComponent,
    LessonAssignmentComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
