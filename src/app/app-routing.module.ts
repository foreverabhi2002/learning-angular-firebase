import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/create-product/create-product.component';
import { EditProductComponent } from './pages/dashboard/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
