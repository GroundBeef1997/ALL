import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container content has-text-centered"> 
      <p> Im a footer !! </p>
    </div>
  </footer>
  `,
  styles: [ `
    footer {
      height: 10px;
      bottom:0px;
      width:100%;
    }  
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
