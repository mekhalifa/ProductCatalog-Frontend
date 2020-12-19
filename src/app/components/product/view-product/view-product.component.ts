import { ProductService } from './../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId!: number;
  product!: Product;
  constructor(private actRoute: ActivatedRoute, private router: Router,private service: ProductService) { }

  ngOnInit(): void {
    // search for id
    const pramId = 'id';
    if (this.actRoute.snapshot.params[pramId]) {
      this.productId = this.actRoute.snapshot.params[pramId];
      if (this.productId > 0) {
        this.service.getProduct(this.productId).subscribe(
          (next) => {
            this.product = next;
          },
          (err) => {
            console.log(err);
          }
        );

    }else{
      this.router.navigate(['/notfound']);
    }
  }

}
  // to create img path
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44375/${serverPath}`;
  }
}
