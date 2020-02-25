import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { productsReducers } from "./products.reducers";

export interface AppState {}

// Adding all reducers to appReducers which will be passed to appModule
export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    products: productsReducers
};