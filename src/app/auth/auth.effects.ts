import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

import { AuthActions } from "./action-types";
import { from } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  // constructor(private actions$: Actions) {
  //   actions$.subscribe((action) => {
  //     if (action.type == "[Login Page] User Login") {
  //       localStorage.setItem("user", JSON.stringify(action["user"]));
  //     }
  //   });
  // }

  constructor(private router: Router, private actions$: Actions) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          localStorage.setItem("user", JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem("user");
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );
}
