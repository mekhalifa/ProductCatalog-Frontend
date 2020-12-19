import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { AddEditProductComponent } from './components/product/add-edit-product/add-edit-product.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { DeleteModelComponent } from './components/product/delete-model/delete-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './components/shared/upload/upload.component';
import { ListGridProductComponent } from './components/product/list-grid-product/list-grid-product.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEditProductComponent,
    ListProductComponent,
    ViewProductComponent,
    DeleteModelComponent,
    UploadComponent,
    ListGridProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
