import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frontend-mentor-todo-app';
  colorMode: string = "dark";
  filterBy: string = "all";

  todoList: Todo[] = [];

  constructor() {
    this.todoList = [
      {isDone:true, description: "Complete online javascript course."},
      {isDone:false, description: "Jog around the park 3x."},
      {isDone:false, description: "10 minutes meditation."},
      {isDone:false, description: "Read for 1 hour."},
      {isDone:false, description: "Pick up groceries."},
      {isDone:false, description: "Complete Todo App on Frontend Mentor"},
    ]
  }

  /**
   * addTodo
   */
  public addTodo(event: any) {
    const todoDesc: string = event.target.value;
    if (todoDesc) {
      this.todoList.push({
        isDone: false,
        description: todoDesc}
      );
    }
  }

  /**
   * clearCompleted
   */
  public clearCompleted() {
    this.todoList = this.todoList.filter(todo => !todo.isDone);   
  }

  public switchMode() {    
    if (this.colorMode === "dark") {
      this.colorMode = "light"
    } else {
      this.colorMode = "dark";
    }
  }

  public check(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  public delete(todo) {
    // this.todoList = this.todoList.filter(item => item !== todo);
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

}

