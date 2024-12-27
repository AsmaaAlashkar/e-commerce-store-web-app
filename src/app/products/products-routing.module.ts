import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllProductsComponent } from './components/display-all-products/display-all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: DisplayAllProductsComponent, canActivate: [authGuard]  }, 
  { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [authGuard]  }, 
  { path: 'add-product', component: AddProductComponent, canActivate: [authGuard]  }, 
  { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [authGuard]  } 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
