import { Component, OnInit, Input } from '@angular/core';
import 'ng2-codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript';
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
      scrollbarStyle: 'simple',
    };
  }
  ngOnInit() {
        $('.dropdown-button').dropdown();
  }

  changeLanguage(language: string){
    alert('Language : '+language);
    switch(language){
      case 'c':this.config.mode = 'text/x-csrc';
        break;
      case 'c++':this.config.mode = 'text/javascript';
        break;
      case 'python':this.config.mode = 'text/x-python';
        break;
      default : this.config.mode = 'text/x-python';
    }
  }

  changeTheme(theme: string){
    alert('Theme : '+theme);
    this.config.theme = theme;
  }

}
