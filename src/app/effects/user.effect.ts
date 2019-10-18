import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as fromUserActions from '../actions/user.action';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private http: HttpClient, private store: Store<any>,
        private userService: UserService) {

    }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(fromUserActions.LOAD_USERS),
        switchMap( (action: any) => {
            return this.userService.getDynamicUsers()
            .pipe(
                map(dynamicUsers =>  (new fromUserActions.AddDynamicUserAction(dynamicUsers)))
            )
        })
    )

}