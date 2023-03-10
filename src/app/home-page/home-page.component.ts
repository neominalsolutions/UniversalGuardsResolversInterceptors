import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHomePageModel } from './home.resolver';
import { IUser, UserService } from './user.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  fromService: IUser[] = [];
  fromResolver!: IHomePageModel;

  constructor(private us: UserService, private acr: ActivatedRoute) {}

  ngOnInit(): void {
    const response = this.acr.snapshot.data['response'] as IHomePageModel;
    console.log('response', response);
    // console.timeEnd('start');
    this.fromResolver = { ...response };

    response.users.forEach((item: IUser) => {});

    console.time('start');

    this.us.getUsers().subscribe((data: IUser[]) => {
      console.log('data', data);

      this.fromService = [...data];
      console.timeEnd('start');

      // for (const item of data) {
      //     item.
      // }
    });
  }
}
