import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(){ }
  addUpdateButton="Add";
  product = {
    id:0, name:'', description:'', price:'',vendor:'',stock:''
  }
  
  products=[
  {id:1,name:'QuantumGlow Smart Lightbulb',description:'Lightbulb', price:"1000.40", vendor:'Philips', stock:"100"},
  {id:2,name:'EcoHarvest Bamboo Travel Mug',description:'Beverage Mug', price:"134.70", vendor:'BrewWare Emporium', stock:"23"},
  {id:3,name:'ZenTech Meditation Pillow',description:'Cushion Pillow', price:"999", vendor:'Dream Heaven Furnishings', stock:"39"},
  {id:4,name:'AeroFit Pro Wireless Earbuds',description:'Ear buds', price:"2040", vendor:'Apple', stock: "49"}
  ];
  
  
  
  resetProduct()
  {
    console.log(">>resetproduct");
    this.addUpdateButton = "Add";
    this.product = {
      id:0, name:'', description:'', price:'', vendor:'', stock:''}
  }
  
  updateProduct(id:number)
  {
    this.addUpdateButton="Update";
    const [product]= this.products.filter((record)=>(record.id === id)); // giving the whole updating record details to add product function
    this.product= {...product};
  }
  addProduct()
  {
    {
      console.log(">>addProduct"+this.product.id )
      if(this.product.id)
      {
        const temp = this.products.map((record)=>
        {
          if(record.id == this.product.id)
          {
            record = {...this.product};  // updating the particular product record
          }
          return record; // returning all the records including updating record to temp array
        })
        this.products = temp; //transferring temp array to permanent array
      }else{
      this.product.id=this.getMaxId();
      //this.products.push(this.product);
      this.products=[...this.products,this.product];
    }
    this.resetProduct();
    }
  }
  getMaxId()
  {
    if(this.products.length === 0)
    {
      return 1;
    }
    const list:any = this.products.map(({id})=>(id));
     let maxId = Math.max(...list);
    return maxId+1;
  }
  deleteProduct(id:number){
    console.log(">> deleteCustomer "+id)
  this.products = this.products.filter((record)=>(record.id!=id))
  }
  
    copyProduct(id:number){
      console.log(">> Copy the record "+id)
      // this is object destructuring
      const [product] = this.products.filter((record)=>(record.id === id));
      if(product){
        const copyCustomer = {...product,id:(this.getMaxId())}
        //this.products.push(copyCustomer);
        this.products=[...this.products,copyCustomer];
      }
    }
    displayedColumns: string[] = [ 'id','name', 'description', 'price', 'vendor','stock','edit','copy','delete'];
}
