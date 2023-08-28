import {Component, Output, EventEmitter, Input} from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-simple-auto-complete',
  templateUrl: './simple-auto-complete.component.html',
  styleUrls: ['./simple-auto-complete.component.scss']
})
export class SimpleAutoCompleteComponent {
  title = 'materialApp';
  @Input()
  set formControlValue(name: string) {
    this.myControl.setValue(name);
  }
  get formControlValue() { return this.myControl.value; }

  @Input() placeholder = ''
  myControl = new FormControl();
  states: any = [];
  @Output() onSelectValue = new EventEmitter<any>(true);

  constructor(){
    this.loadStates();
  }

  onSelected() {
    this.onSelectValue.emit(this.myControl.getRawValue());
  }
  //build list of states as map of key-value pairs
  loadStates() {
    const allStates = 'WEB DESIGN, GRAPHIC DESIGN, DEVELOPMENT, BRANDING, PHOTOGRAPHY, USER EXPERIENCE';
    this.states =  allStates.split(/, +/g).map( function (state) {
      return {
        value: state.toUpperCase(),
        display: state
      };
    });
  }
}
