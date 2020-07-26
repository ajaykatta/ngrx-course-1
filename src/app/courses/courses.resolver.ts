import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "app/reducers";
import { CourseActions } from "./action-types";
import { tap, first, finalize, filter } from "rxjs/operators";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable()
export class CourseResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((coursesLoaded) => {
        if (!this.loading && !coursesLoaded) {
          this.loading = true;
          this.store.dispatch(CourseActions.loadAllCourses());
        }
      }),
      filter((coursesLoaded) => coursesLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
