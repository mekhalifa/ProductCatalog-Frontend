import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { AddEditProductComponent } from './components/product/add-edit-product/add-edit-product.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'products/list', component: ListProductComponent },
{path: 'products/add', component: AddEditProductComponent },
{path: 'products/edit/:id', component: AddEditProductComponent },
{path: 'products/view/:id', component: ViewProductComponent },
{path: 'Notfound', component: NotFoundComponent},
{path: '**', redirectTo: 'Notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
