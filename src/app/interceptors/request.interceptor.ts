import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('request', request);

    const token = localStorage.getItem('token');
    console.log('t', token);

    if (token != undefined) {
      // let header = request.headers;
      // header = header.append('Authorization', `Beaerer ${token}`);

      // console.log('h', header);

      const req = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${token}`),
      });

      console.log('req-1', req);

      return next.handle(req);
    }

    return next.handle(request);
  }
}
