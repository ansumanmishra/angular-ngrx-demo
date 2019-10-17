import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UserReducer } from './reducer/user.reducer';
import { TodoReducer } from './reducer/todo.reducer';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { UserEffects } from './effects/user.effect';
import { DynamicUsersComponent } from './dynamic-users/dynamic-users.component';


const reducers = {
  user: UserReducer,
  todo: TodoReducer,
}

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    DynamicUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
