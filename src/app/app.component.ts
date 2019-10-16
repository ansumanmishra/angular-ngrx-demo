import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users$;
  todos$;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select(state => state.user.users);
    this.todos$ = this.store.select(state => state.todo.todos);
  }

  ngOnInit() {
    this.store.dispatch({type: 'GET_USERS'});
    this.store.dispatch({type: 'GET_TODOS', payload: ['Do workout', 'Practice Angular']});

    setTimeout( () => {
      // this.store.dispatch({type: 'ADD_USER', payload: 'Anil'});
    }, 2000);
  }
}
