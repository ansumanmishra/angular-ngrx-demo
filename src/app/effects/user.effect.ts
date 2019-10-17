import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private http: HttpClient, private store: Store<any>,
        private userService: UserService) {

    }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType('LOAD_USERS'),
        switchMap( (action: any) => {
            console.log(action.type)
            return this.userService.getDynamicUsers()
            .pipe(
                map(dynamicUsers =>  ({type: 'ADD_DYNAMIC_USERS', payload: dynamicUsers}))
            )
                
        })
    )

}