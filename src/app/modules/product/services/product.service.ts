/**
 * 4. Creation of a service to fetch product from /products/:id endpoint using HTTP Client and return as an observable
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseUrl = 'http://localhost:3000/products/';
    constructor(private http: HttpClient) {
        
    }
    /**
     * Method to get a product by id from products endpoint
     * Returns an Observable of type Product as output
     * @param id
     */
    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(this.baseUrl+id);
    }

    /**
     * Method to get all products from products endpoint
     * Returns an Obsrvable of type Products array as output
     */
    getProducts(): Observable<Product[]> {
        return this.http.get(this.baseUrl).pipe(
            map(res => res['payload'])
        );
    }
}