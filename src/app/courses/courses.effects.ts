import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import { CourseActions } from './action-types';
import { tap, map, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CoursesHttpService } from './services/courses-http.service';
import { Course } from './model/course';

@Injectable()
export class CourseEffect {
  constructor(
    private coursesHttpService: CoursesHttpService,
    private store: Store<AppState>,
    private actions$: Actions
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap((action) => this.coursesHttpService.findAllCourses()),
      map((courses) => CourseActions.allCoursesLoaded({ courses }))
    )
  );
}
