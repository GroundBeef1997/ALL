import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight has-bg-img">
     <div class="hero-body">
     <div class="container">   
       <h1 class="title"> Welcome to my homepage ! </h1>
     </div>
    </div>
  </section>
  `,
    styles: [ `
    h1 {
    font-size: 50px;
  }
  
  .has-bg-img  {
  background: url('/assets/img/summer.jpg') !important;
  background-size: cover;
  background-position: center center;
 }
  `]

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
