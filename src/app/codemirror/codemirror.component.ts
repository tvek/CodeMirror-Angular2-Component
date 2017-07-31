import { Component, OnInit, Input } from '@angular/core';
import 'ng2-codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/scroll/simplescrollbars.js';

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
      keyMap: 'sublime',
      matchBrackets: true,
      autoCloseBrackets: true,
      autoClearEmptyLines: true,
      theme: 'monokai',
      scrollbarStyle: 'simple'
    };
  }
  ngOnInit() {
        $('.dropdown-button').dropdown();
  }

}
