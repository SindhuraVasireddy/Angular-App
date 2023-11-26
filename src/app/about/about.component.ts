import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
 // standalone: true,
 // imports: [MatTableModule],
})
export class AboutComponent {
  buttonClick()
  {
    
      var contactEmail = 'chinnisindhu23@gmail.com';

      // Open the default email client with a new email to the specified address
      window.location.href = 'mailto:' + contactEmail;
    }
  }


