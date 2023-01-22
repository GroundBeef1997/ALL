import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold"> 
      <div class="hero-body">
        <div class="container">        
        <h1 class="title"> Contact us ! </h1>      
       </div>
      </div>
    </section>

    <section class="section1">     
      <div class="container">  
            
        <form (ngSubmit)="submitForm()">
          <div class="field"> 
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name">
          </div>

          <div class="field"> 
          <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email">
          </div>

          <div class="field"> 
          <label class="label">Your message</label>
           <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>

          <button type="submit" class="button is-large is-warning">Submit</button>
        </form>     
      </div>
    </section>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
 submitForm() {
  alert("i am submitting !");
 }
}
