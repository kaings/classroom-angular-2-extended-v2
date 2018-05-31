import { Component, OnInit, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() element: {name: string, type: string, content: string};
  @Output() removeElement = new EventEmitter<{ id: number }>();

  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit is called!');
    console.log(this.contentParagraph);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called!');
    console.log(this.contentParagraph.nativeElement);
  }

  ngOnChanges(changes) {
    console.log('ngOnchanges is called!');
    console.log(changes);
  }


  onRemoveElement(id: number) {
    this.removeElement.emit({ id });
  }

}
