import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/products.reducers';
import * as fromProduct from '../reducers/products.reducers';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

// Selector to find product by id from entities
export const selectProductById = (id: string) => createSelector(
    selectProductsState,
    productsState => productsState.entities[id]
);

// Selector to get all products
export const selectAllProducts = createSelector(
    selectProductsState,
    fromProduct.selectAll
);

// Selector to indicate if all products are loaded
export const productsLoaded = createSelector(
    selectProductsState,
    productsState => productsState.productsLoaded
)
