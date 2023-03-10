import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GuardsResolversInterceptors';

  constructor(private rE: Router) {}
  ngOnInit(): void {
    this.rE.events
      .pipe(filter((e: any): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        console.log('e', e);

        if (e instanceof NavigationEnd) {
          // hangi evente olduğunuzu yakalayabiliriz.
        }
        // Do something
      });
  }
}
