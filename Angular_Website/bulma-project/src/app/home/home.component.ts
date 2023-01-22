import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
     <div class="hero-body">
     <div class="container"> 
      
       <h1 class="title"> Welcome to My Home Page ! </h1>
       
     </div>
    </div>
  </section>

  `,
  styles: [ `
section.hero {
 
  font-size: 50px;
  background-image: url("./assets/img/op/summer.jpg");
  
 
}
`
    
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
