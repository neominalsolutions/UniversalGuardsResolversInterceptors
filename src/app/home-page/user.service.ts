import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://reqres.in/api/users?page=1').pipe(
      map((response: any) => {
        return response.data as IUser[];
      })
    );
  }
}
