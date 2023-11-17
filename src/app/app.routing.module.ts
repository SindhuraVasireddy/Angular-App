import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductComponent} from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //default path
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'products', component: ProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
