import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment';
  onSubmit(form: NgForm) {
    if(form.valid){
      alert('payment done successfully');
    
    }}
}