
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://localhost:44375/api/product';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type' , 'application/json')
  };
  constructor(private httpClient: HttpClient) {  }

  getProducts(searchkey = ''): Observable<Product[]>{

   return this.httpClient.get<Product[]>( this.url + `?searchKey=${searchkey}`  , this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      );
  }

  getProduct(id: number): Observable<Product>{

    return this.httpClient.get<Product>( this.url + '/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      );
   }

  AddProduct(formData: any, img: any): Observable<any>{

    const product: object = {
      name : formData.name,
      price : formData.price,
      photo : img
    };
    return this.httpClient.post( this.url, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      );
   }

  EditProduct(id: number, formData: any , img: any): Observable<any>{
    const product: Product = {
      id: formData.id,
      name : formData.name,
      price : formData.price,
      photo : img === 'Images/default-image.jpg' ? formData.photo : img
    };
    return this.httpClient.put<Product>( this.url + '/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      );
   }
   DeleteProduct(id: number): Observable<any>{

    return this.httpClient.delete<Product>( this.url + '/'  + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
      );
   }


  errorHandler(error: any): Observable<any>{
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
