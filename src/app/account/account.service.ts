import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../Shared/Model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router: Router){}

  login(values: any)
  {
    return this.http.post<User>(this.baseUrl + 'Login', values).pipe(
      map(user => {
        localStorage.setItem('data', user.data);
        this.currentUserSource.next(user);
      })
    )
  }

  register(values: any)
  {
    return this.http.post<User>(this.baseUrl + 'Register', values).pipe(
      map(user => {
        localStorage.setItem('data', user.data);
        this.currentUserSource.next(user);
      })
    )
  }

  logout()
  {
    localStorage.removeItem('datA');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }
}
