import { Component, OnInit, Input } from '@angular/core';
import 'ng2-codemirror';
import 'codemirror/mode/python/python';

declare var $: any;

@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent implements OnInit {

  @Input() config: any;
  @Input() content: string;
  constructor() {
    this.config = {
      lineNumbers: true,
      mode: 'text/x-python',
      electricChars: true,
      matchBrackets: true,
      autoClearEmptyLines: true,
      theme: 'monokai'
    };
  }
  ngOnInit() {
        $('.dropdown-button').dropdown();
  }

}
