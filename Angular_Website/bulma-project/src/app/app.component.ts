import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
    <app-header></app-header>
    
    <app-home></app-home>  
    <app-footer></app-footer>
    
    </div>
  
    
  `,
  styles: []
})
export class AppComponent {
  title = 'bulma-project';
}
