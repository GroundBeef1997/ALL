import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-contact></app-contact>
  <app-header></app-header>
  
  <app-home></app-home>
  
  <router-outlet></router-outlet>

  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'julien-angular-website';
}
