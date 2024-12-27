import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoriessRoutingModule } from './categoriess-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriessRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
