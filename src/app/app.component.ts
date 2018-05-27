import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: {name: string, type: string, content: string}[] = [];
  // serverName: string;
  // serverContent: string;

  onCreateServer(serverData: { sName: string, sContent: string }) {
    this.servers.push(
      {
        name: serverData.sName,
        type: 'Server',
        content: serverData.sContent
      }
    );
  }

  onCreateBlueprint(serverData: { sName: string, sContent: string }) {
    this.servers.push(
      {
        name: serverData.sName,
        type: 'Blueprint',
        content: serverData.sContent
      }
    );
  }

  onDelElement(num: number) {
    this.servers.splice(num, 1);
  }

}
