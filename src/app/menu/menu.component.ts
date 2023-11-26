
import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {
  isLarge: boolean;
  private breakpointSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Initial check for screen size
    this.isLarge = this.breakpointObserver.isMatched('(min-width: 768px)');

    // Subscribe to changes in screen size
    this.breakpointSubscription = this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
      this.isLarge = result.matches;
    });
  }

  ngOnDestroy(): void {
    // Clean up the subscription when the component is destroyed
    this.breakpointSubscription.unsubscribe();
  }
}
