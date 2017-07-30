import { Component, Input, OnInit } from '@angular/core';
import 'ng2-codemirror';
import 'codemirror/mode/go/go';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() config: any;
  @Input() content: string;
  title = 'app';
  constructor() {
    this.config = { lineNumbers: true, mode: 'text/x-go' };
  }
  ngOnInit() {
  }
}

