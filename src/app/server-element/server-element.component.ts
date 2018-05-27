import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {name: string, type: string, content: string};
  @Output() removeElement = new EventEmitter<{ id: number }>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveElement(id: number) {
    this.removeElement.emit({ id });
  }

}
