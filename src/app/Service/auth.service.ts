import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'api/login';
  private registerUrl = 'api/register';

  private isLoggedInSubject = new Subject<boolean>();
  isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }
  showNavBar(){
    this.isLoggedInSubject.next(true)
  }

  login(email: string, password: string): Observable<any> {
    this.isLoggedInSubject.next(true);
    return this.http.post<any>(this.loginUrl, { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.registerUrl, { email, password });
  }
}
