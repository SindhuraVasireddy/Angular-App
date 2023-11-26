import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
 
  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {
    // Initial check for screen size
    this.isLarge = this.breakpointObserver.isMatched('(min-width: 768px)');

    // Subscribe to changes in screen size
    this.breakpointSubscription = this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
      this.isLarge = result.matches;
    });
  }

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
  isLarge: boolean;
  private breakpointSubscription: Subscription;

 

  ngOnDestroy(): void {
    // Clean up the subscription when the component is destroyed
    this.breakpointSubscription.unsubscribe();
  }
}