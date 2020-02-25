import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../modules/product/models/product.model';
import { ProductActionTypes, ProductActions } from '../actions/product.actions';

// Create initial entity state  
export interface ProductsState extends EntityState<Product> {
    productsLoaded: boolean;
}
// Create adapter to perform entity actions
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
// Get initial state  
export const initialProductsState: ProductsState = adapter.getInitialState({
    productsLoaded: false
});

/**
 * 11. Implements at least one Ngrx reducer
 * @param state 
 * @param action 
 */
export function productsReducers(state = initialProductsState, action: ProductActions) : ProductsState {
    switch(action.type) {
        case ProductActionTypes.GetAllProductsSuccess:
            // Add all products to state
            return adapter.addAll(action.payload.products, state);
    
        case ProductActionTypes.GetProductSuccess:
            // Add single product to state
            return adapter.addOne(action.payload.product, state);

        default:
            return state;
    }
}

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();