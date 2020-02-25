import { Action } from '@ngrx/store';
import { Product } from '@app/modules/product/models/product.model';
 
export enum ProductActionTypes {
    GetAllProducts = '[Product] Get All Products',
    GetAllProductsSuccess = '[Product] Get All Products Success',
    GetProduct = '[Product] Get Product',
    GetProductSuccess = '[Product] Get Product Success'
}

/**
 * 12. Implements at least two Ngrx actions
 */
export class GetAllProducts implements Action {
    public readonly type = ProductActionTypes.GetAllProducts;
}

export class GetAllProductsSuccess implements Action {
    public readonly type = ProductActionTypes.GetAllProductsSuccess;
    constructor(public payload: {products: Product[]}) {}
}

export class GetProduct implements Action {
    public readonly type = ProductActionTypes.GetProduct;
    constructor(public payload: {id: string}) {}
}

export class GetProductSuccess implements Action {
    public readonly type = ProductActionTypes.GetProductSuccess;
    constructor(public payload: {product: Product}) {}
}

export type ProductActions = GetAllProducts | GetAllProductsSuccess | GetProduct | GetProductSuccess;