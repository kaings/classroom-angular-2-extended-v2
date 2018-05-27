import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  serverName: string;
  serverContent: string;

  @Output() addServer = new EventEmitter<{ sName: string, sContent: string }>();
  @Output() addBlueprint = new EventEmitter<{ sName: string, sContent: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.addServer.emit({ sName: this.serverName, sContent: this.serverContent });
  }

  onAddBlueprint() {
    this.addBlueprint.emit({ sName: this.serverName, sContent: this.serverContent });
  }
}
