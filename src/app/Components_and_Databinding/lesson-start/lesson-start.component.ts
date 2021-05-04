import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-start',
  templateUrl: './lesson-start.component.html',
  styleUrls: ['./lesson-start.component.css']
})
export class LessonStartComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'This is a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onRemoveFirst() {
    this.serverElements.splice(0,1);
  }
}
