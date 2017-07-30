import { Component, OnInit, Input } from '@angular/core';
import 'ng2-codemirror';
import 'codemirror/mode/go/go';

@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent implements OnInit {

  @Input() config: any;
  @Input() content: string;
  constructor() {
    this.config = { lineNumbers: true, mode: 'text/x-go' };
  }
  ngOnInit() {
  }

}
