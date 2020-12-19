import { FormGroup, FormBuilder } from '@angular/forms';
import { DeleteModelComponent } from './../delete-model/delete-model.component';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  // products list
  public productList!: Product[];
  public searchForm!: FormGroup;
  public searchKey = '';

  constructor(private service: ProductService , private modalService: NgbModal, private fb: FormBuilder) {
    this.searchKey = '';
  }

  ngOnInit(): void {
    this.searchKey = '';
    this.loadProducts();
    this.searchForm = this.fb.group({
      searchKey: []
    });
  }

  // Get Products and refresh it
  loadProducts(): void{
    this.service.getProducts(this.searchKey).subscribe(
      (data) => {
        this.productList = data;
      },
      (err) => {
        console.log(err);
      },
    );
  }

  // to create img path
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44375/${serverPath}`;
  }

  // to confirm and delete product from model
  public deleteProduct(id: number, name: string): void{
    // show confirm delete component model
    const modalRef = this.modalService.open(DeleteModelComponent);
    modalRef.componentInstance.name =  name;
    modalRef.result.then((result) => {
      if (result === 'yes'){
        this.service.DeleteProduct(id).subscribe(
          () => {
            this.loadProducts();
          },
          (err) => {
            console.log(err);
          },
        );
      }
    });
  }

  onSubmit(formData: FormGroup): void{
    this.searchKey = formData.value.searchKey;
    this.loadProducts();
  }

}
