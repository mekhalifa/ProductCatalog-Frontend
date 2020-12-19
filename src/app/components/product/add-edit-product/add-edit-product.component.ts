import { Product } from './../../../models/product';

import { ProductService } from './../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  response = {dbPath: 'Images/default-image.jpg'};
  addEditForm!: FormGroup;
  productId = 0;
  isAddMode = true;
  url!: string;
  fileToUpload: any;
  files: any;
  constructor(private service: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private actRoute: ActivatedRoute) { }


  ngOnInit(): void {

    // search for id paramter to edit
    const pramId = 'id';
    if (this.actRoute.snapshot.params[pramId]) {
      this.productId = this.actRoute.snapshot.params[pramId];
    }
    // create form
    this.addEditForm = this.fb.group({
      id: [this.productId],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      photo: []
    });

    // for edit
    if (this.productId > 0) {
      this.isAddMode = false;
      this.service.getProduct(this.productId).subscribe(
        (next) => {
          this.addEditForm.patchValue(next);
        },
        (err) => {
          console.log(err);
        }
      );


    }

  }

  onSubmit(formData: FormGroup): void {

    if (formData.valid) {

      // if create product
      if (this.isAddMode){

        this.service.AddProduct(formData.value, this.response.dbPath).subscribe(
          (next) => {
            this.router.navigate(['/products/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      // if edit product
      if (!this.isAddMode){

        this.service.EditProduct(this.productId, formData.value, this.response.dbPath).subscribe(
          (next) => {
            this.router.navigate(['/products/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }

      formData.reset();
    }
  }

  // form date for validation
  get name(): any { return this.addEditForm.get('name'); }
  get price(): any { return this.addEditForm.get('price'); }
  get photo(): any { return this.addEditForm.get('photo'); }


  // when upload photo save path
  public uploadFinished = (event: any) => {
    this.response = event;
    console.log(event);
  }


}
