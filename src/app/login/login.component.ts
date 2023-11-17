import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  user = {             // two way binding:
  	username:"sindhu", // sending data to view and will receive data from view
  	password:"sindhu",
  }
  
  ngOnInit() {
  }
  doLogin(){
  	let a:string='47';
    let b:number=100;
    console.log("Value of a="+a);
    if(this.user.username==this.user.password&&this.user.username!='')
    {
      this.router.navigate(['/products']);
    }
    else
    {
      alert('login failed..');
    }
  }
}