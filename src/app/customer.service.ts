// customer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // Use a default value if localStorage.getItem returns null
  customers = JSON.parse(localStorage.getItem('customers') || '[]') as Array<any>;

  getMaxId()
  {
    if(this.customers.length === 0)
    {
      return 1;
    }
    const list:any = this.customers.map(({id})=>(id));
     let maxId = Math.max(...list);
    return maxId+1;
  }

  constructor() {
    // Check if localStorage has data; if not, set default data
    if (this.customers.length === 0) {
      this.setDefaultData();
    }
  }

  private setDefaultData() {
    // Set default data
    this.customers = [
        {id:1,name:'Vivek',email:'vivek@abc.com',phone:'2893485943', address:'India'},
        {id:2,name:'Pratistha',email:'pari@abc.com',phone:'3245359458', address:'India'},
        {id:3,name:'Samridh',email:'samar@abc.com',phone:'4535424582', address:'India'},
        {id:4,name:'Vishal',email:'vishal@abc.com',phone:'6849304853', address:'India'}
    ];

    // Save default data to localStorage
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
}

   

      

