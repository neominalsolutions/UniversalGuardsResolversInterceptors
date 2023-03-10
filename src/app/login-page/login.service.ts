import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(request: ILoginRequest) {
    return this.http.post<ILoginResponse>(
      'https://reqres.in/api/login',
      request
    );
  }
}
