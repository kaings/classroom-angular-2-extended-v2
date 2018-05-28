import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

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

  @ViewChild('serverContentInput') sContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  /* using HTML local reference */
  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput.value);
    this.addServer.emit({ sName: serverNameInput.value, sContent: this.sContentInput.nativeElement.value });
  }

  /* using @ViewChild ElementRef */
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // console.log(this.sContentInput.nativeElement.value);
    this.addBlueprint.emit({ sName: serverNameInput.value, sContent: this.sContentInput.nativeElement.value });
  }
}
