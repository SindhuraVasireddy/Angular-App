// product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Use a default value if localStorage.getItem returns null
  products = JSON.parse(localStorage.getItem('products') || '[]') as Array<any>;

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

  constructor() {
    // Check if localStorage has data; if not, set default data
    if (this.products.length === 0) {
      this.setDefaultData();
    }
  }

  private setDefaultData() {
    // Set default data
    this.products=[
        {id:1,name:'QuantumGlow Smart Lightbulb',description:'Lightbulb', price:"1000.40", vendor:'Philips', stock:"100"},
        {id:2,name:'EcoHarvest Bamboo Travel Mug',description:'Beverage Mug', price:"134.70", vendor:'BrewWare Emporium', stock:"23"},
        {id:3,name:'ZenTech Meditation Pillow',description:'Cushion Pillow', price:"999", vendor:'Dream Heaven Furnishings', stock:"39"},
        {id:4,name:'AeroFit Pro Wireless Earbuds',description:'Ear buds', price:"2040", vendor:'Apple', stock: "49"}
        ];
    
    // Save default data to localStorage
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}

   
