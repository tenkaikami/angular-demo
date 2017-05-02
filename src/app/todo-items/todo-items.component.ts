import { TodoItem } from './../todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})


export class TodoItemsComponent implements OnInit {
  toggleItemEditing(item: TodoItem) {
    item.oldText = item.text;
    item.isEditing = !item.isEditing;
  }

  confirmItemEditing(item: TodoItem) {
    this.toggleItemEditing(item);
  }

  cancelItemEditing(item: TodoItem) {
    item.text = item.oldText;
    this.toggleItemEditing(item);
  }

  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}

