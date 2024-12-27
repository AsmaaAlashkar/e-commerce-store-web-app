import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';

const routes: Routes = [
  { path: '', component: AllCategoriesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class CategoriessRoutingModule { }
