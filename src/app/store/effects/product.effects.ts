import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetProduct, GetProductSuccess, GetAllProducts, GetAllProductsSuccess, ProductActionTypes } from '../actions/product.actions';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { map, withLatestFrom, mergeMap, filter } from 'rxjs/operators';
import { ProductService } from '../../modules/product/services/product.service';
import { AppState } from '../reducers/app.reducers';
import { productsLoaded } from '../selectors/product.selectors';

@Injectable()
export class ProductEffects {

    constructor(private productService: ProductService, private actions: Actions, private store: Store<AppState>) {}

    /**
     * 12. Implements at least two Ngrx actions
     * 13. Implements at least one Ngrx effect
     * /

    /**
     * Effect to get all products and dispatch a success action 
     */
    @Effect()
    getProducts$ = this.actions.pipe(
        ofType<GetAllProducts>(ProductActionTypes.GetAllProducts),
        withLatestFrom(this.store.pipe(select(productsLoaded))),
        filter(([action, productsLoaded]) => !productsLoaded),
        mergeMap(() => this.productService.getProducts()),
        map(products => of(new GetAllProductsSuccess({products})))
    );

    /**
     * Effect to get a single product by id and dispatch a success action 
     */
    @Effect()
    getProduct$ = this.actions.pipe(
        ofType<GetProduct>(ProductActionTypes.GetProduct),
        mergeMap(action => this.productService.getProductById(action.payload.id)),
        map(product => new GetProductSuccess({product}))
    );
}
