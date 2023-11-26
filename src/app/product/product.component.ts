import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService] // Add the service as a provider
})
export class ProductComponent implements OnInit {
  constructor(public productService: ProductService) { }
  addUpdateButton = "Add";
  product = {
    id: 0, name: '', description: '', price: '', vendor: '', stock: ''
  }

  resetProduct() {
    console.log(">>resetproduct");
    this.addUpdateButton = "Add";
    this.product = {
      id: 0, name: '', description: '', price: '', vendor: '', stock: ''
    }
  }

  updateProduct(id: number) {
    this.addUpdateButton = "Update";
    const [product] = this.productService.products.filter((record) => (record.id === id)); // giving the whole updating record details to add product function
    this.product = { ...product };
  }
  addProduct() {
    {
      console.log(">>addProduct" + this.product.id)
      if (this.product.id) {
        const temp = this.productService.products.map((record) => {
          if (record.id == this.product.id) {
            record = { ...this.product };  // updating the particular product record
          }
          return record; // returning all the records including updating record to temp array
        })
        this.productService.products = temp; //transferring temp array to permanent array
      } else {
        this.product.id = this.productService.getMaxId();
        //this.products.push(this.product);
        this.productService.products = [...this.productService.products, this.product];
      }
      this.resetProduct();
      localStorage.setItem('products', JSON.stringify(this.productService.products));
    }
  }

  deleteProduct(id: number) {
    console.log(">> deleteCustomer " + id)
    this.productService.products = this.productService.products.filter((record) => (record.id != id));
    localStorage.setItem('products', JSON.stringify(this.productService.products));
  }

  copyProduct(id: number) {
    console.log(">> Copy the record " + id)
    // this is object destructuring
    const [product] = this.productService.products.filter((record) => (record.id === id));
    if (product) {
      const copyCustomer = { ...product, id: (this.productService.getMaxId()) }
      //this.products.push(copyCustomer);
      this.productService.products = [...this.productService.products, copyCustomer];
      localStorage.setItem('products', JSON.stringify(this.productService.products));

    }
  }
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'vendor', 'stock', 'edit', 'copy', 'delete'];
  ngOnInit(): void {
    // Use this.customerService.customers instead of this.customers
    this.productService.products;
  }
}  
