import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'', 
    component: LoginComponent
  },
  {
    path:'product', 
    component: ProductListComponent
  },
  { path: 'product/:productId', 
  component: ProductDetailComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
