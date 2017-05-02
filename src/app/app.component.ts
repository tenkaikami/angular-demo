import { Http } from '@angular/http';
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from "./todo-item";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    //  沒說
     todoItems: TodoItem[];
todoItemCount = 0;
  title = 'app works!';


constructor(private todoService: TodoService, private http: Http){
}
// todoItems:TodoItem [] = [
//     {
//         id: 1,
//         text: 'item 1',
//         done: false
//     },
//     {
//         id: 2,
//         text: 'item 2',
//         done: true
//     },
//     {
//         id: 3,
//         text: 'item 3',
//         done: false
//     }
// ];

addTodoText(todoText)
{
  this.todoService.addTodoText(todoText);
  // this.todoItemCount = this.todoItems.length;
}

 ngOnInit(){
   // this.todoItems =this.todoService.todoItems;
    this.http.get('assets/data.json').subscribe(response => {
            this.todoItems = this.todoService.todoItems = response.json();
        });

   // this.http.get('assets/data.json').subscribe(Response => )

   // this.todoItemCount = this.todoItems.length;
  }
// addTodoText($event){
//   this.todoItems.push({
//     id:this.todoItems.length +1,
//     text:$event,
//     done:false
//   })
// }
// toggleItemEditing(item: TodoItem) {
//     item.oldText = item.text;
//     item.isEditing = !item.isEditing;
// }

// confirmItemEditing(item: TodoItem) {
//     this.toggleItemEditing(item);
// }

// cancelItemEditing(item: TodoItem) {
//     item.text = item.oldText;
//     this.toggleItemEditing(item);
// }
}




