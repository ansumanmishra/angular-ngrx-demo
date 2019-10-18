import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './actions/user.action';
import * as fromTodosAction from './actions/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users$;
  todos$;
  dynamicUsers$;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select(state => state.user.users);
    this.todos$ = this.store.select(state => state.todo.todos);
    this.dynamicUsers$ = this.store.select(state => state.user.dynamicUsers);
  }

  ngOnInit() {
    this.store.dispatch(new UserActions.GetUsersAction());
    this.store.dispatch(new fromTodosAction.GetTodosAction(['Do workout', 'Practice Angular & React']));

    setTimeout( () => {
      this.store.dispatch(new UserActions.AddUserAction('Anil'));
      this.store.dispatch(new UserActions.LoadUsersAction());
    }, 2000);
  }
}
