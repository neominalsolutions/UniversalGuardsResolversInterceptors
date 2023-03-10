import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { LoginService } from 'src/app/login-page/login.service';
import { PhotoService } from './photo.service';
import { IUser, UserService } from './user.service';

export interface IHomePageModel {
  users: IUser[];
  photos: any[];
}

// resolverlar sayfa bazlı path göre çalışan yapılardır.

@Injectable({
  providedIn: 'root',
})
export class HomeResolver {
  constructor(private us: UserService, private p: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IHomePageModel> {
    // users?name=ali
    // user-detail/1
    console.log('route', route);
    console.log('state', state);

    // console.time('start');

    const res = forkJoin({
      users: this.us.getUsers(),
      photos: this.p.getPhotos(),
    });

    return res;
  }
}
