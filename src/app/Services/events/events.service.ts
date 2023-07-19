import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Events } from 'src/app/Shared/Model/Events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'http://localhost:5001/Event/GetEvents'; 

  constructor(private http: HttpClient) {}

  getList(): Observable<Events[]> 
  {
    return this.http.get<Events[]>(this.apiUrl);
  }

}
