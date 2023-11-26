import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService] // Add the service as a provider
})
export class CustomersComponent implements OnInit {
  constructor(public customerService: CustomerService) { }
  addUpdateLabel = "Add";
  customer = {
    id:0, name:'',email:'',phone:'',address:''
  }
  
   
  deleteCustomer(id:number){
    console.log(">> deleteCustomer "+id)
    this.customerService.customers = this.customerService.customers.filter((record:any)=>(record.id != id));
    localStorage.setItem('customers', JSON.stringify(this.customerService.customers));
  }
  resetCustomer(){
    console.log(">>resetCustomer")
    this.customer = {
      id:0, name:'',email:'',phone:'',address:''
    }
    this.addUpdateLabel = "Add";
  }

  customerDetails(id:number){
    this.addUpdateLabel="Update";
    const [customer]= this.customerService.customers.filter((record:any)=>(record.id === id)); // giving the whole updating record details to add student function
    this.customer= {...customer};
    }
  
  addUpdateCustomer()
  {
    {
      console.log(">>addCustomer"+this.customer.id )
      if(this.customer.id)
      {
        const temp = this.customerService.customers.map((record:any)=>
        {
          if(record.id == this.customer.id)
          {
            record = {...this.customer};  // updating the particular CUSTOMER record
          }
          return record; // returning all the records including updating record to temp array
        })
        this.customerService.customers = temp; //transferring temp array to permanent array
      }else{
      this.customer.id=this.customerService.getMaxId();
      //this.customers.push(this.customer);
      this.customerService.customers=[...this.customerService.customers,this.customer];
    }
    this.resetCustomer();
    localStorage.setItem('customers', JSON.stringify(this.customerService.customers));
    }
  }

  copyCustomer(id:number){
    console.log(">> Copy the record "+id)
    // this is object destructuring
    const [customer] = this.customerService.customers.filter((record:any)=>(record.id === id));
    if(customer){
      const copyCustomer = {...customer,id:(this.customerService.getMaxId())}
    //  this.customers.push(copyCustomer);
    this.customerService.customers = [...this.customerService.customers,copyCustomer]
    localStorage.setItem('customers', JSON.stringify(this.customerService.customers));
  
  }
  }
  displayedColumns: string[] = [ 'id','name', 'email', 'phone', 'address','edit','copy','delete'];

  
  ngOnInit(): void {
    // Use this.customerService.customers instead of this.customers
    this.customerService.customers; 
  }
}
