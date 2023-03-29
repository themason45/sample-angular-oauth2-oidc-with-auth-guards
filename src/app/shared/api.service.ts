import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {AuthService} from "../core/auth.service";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getProtectedApiResponse(): Observable<string> {
    return this.http.get<any>('http://127.0.0.1:8001/api/example', {
      headers: {
        "Authorization": `Bearer ${this.authService.accessToken}`
      }
    })
      .pipe(
        catchError((e: HttpErrorResponse) => of(`🌩 API Error: ${e.status} ${e.statusText}`)),
      );
  }
}
