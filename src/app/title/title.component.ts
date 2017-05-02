import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title = 'MyTest';
  inputPlaceholder = 'What needs to be done?';

  inputValue = 'addValue';

  @Output() addTodo = new EventEmitter<string>();

  inputKeyUp($event) {
    console.log($event);
  }

  inputEnterKeyUp() {
    this.addTodo.emit(this.inputValue);
    //console.log(this.inputValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
