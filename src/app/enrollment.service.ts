import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';
  constructor(private http: HttpClient) { }

  enroll(user: User) {
   return this.http.post<any>(this.url, user)
   .pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error.message || 'Server error'); })
        );
  }
}
