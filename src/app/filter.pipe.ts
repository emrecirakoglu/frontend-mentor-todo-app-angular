import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Todo[], filterBy: string): Todo[]{

    if (filterBy === "all") {
      return items;
    } else if (filterBy === "active") {
      return items.filter(todo => todo.isDone === false);
    } else if (filterBy === "completed") {
      return items.filter(todo => todo.isDone === true);
    }
  }

}
