import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor() { }
  addUpdateLabel = "Add";
  customer = {
    id:0, name:'',email:'',phone:'',address:''
  }
  customers = [
    {id:1,name:'Vivek',email:'vivek@abc.com',phone:'2356422433', address:'India'},
    {id:2,name:'Pratistha',email:'pari@abc.com',phone:'28896422433', address:'India'},
    {id:3,name:'Samridh',email:'samar@abc.com',phone:'2889rr22433', address:'India'},
    {id:4,name:'Vishal',email:'vishal@abc.com',phone:'28899822433', address:'India'}
    ];
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
  deleteCustomer(id:number){
    console.log(">> deleteCustomer "+id)
    this.customers = this.customers.filter((record)=>(record.id != id))
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
    const [customer]= this.customers.filter((record)=>(record.id === id)); // giving the whole updating record details to add student function
    this.customer= {...customer};
    }
  
  addUpdateCustomer()
  {
    {
      console.log(">>addCustomer"+this.customer.id )
      if(this.customer.id)
      {
        const temp = this.customers.map((record)=>
        {
          if(record.id == this.customer.id)
          {
            record = {...this.customer};  // updating the particular CUSTOMER record
          }
          return record; // returning all the records including updating record to temp array
        })
        this.customers = temp; //transferring temp array to permanent array
      }else{
      this.customer.id=this.getMaxId();
      //this.customers.push(this.customer);
      this.customers=[...this.customers,this.customer];
    }
    this.resetCustomer();
    }
  }

  copyCustomer(id:number){
    console.log(">> Copy the record "+id)
    // this is object destructuring
    const [customer] = this.customers.filter((record)=>(record.id === id));
    if(customer){
      const copyCustomer = {...customer,id:(this.getMaxId())}
    //  this.customers.push(copyCustomer);
      this.customers = [...this.customers,copyCustomer]
    }
  }
  displayedColumns: string[] = [ 'id','name', 'email', 'phone', 'address','edit','copy','delete'];

  
  ngOnInit(): void {
  }
}
