import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAllProductsComponent } from './components/display-all-products/display-all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayAllProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
