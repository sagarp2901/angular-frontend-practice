import {NgModule} from '@angular/core';
import {ProductsPage} from '@products/pages/products/products.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productsReducers } from '@app/store/reducers/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '@app/store/effects/product.effects';


export const productsRoutes: Routes = [
    {
        path: '',
        component: ProductsPage,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild( productsRoutes ),
        StoreModule.forFeature('products', productsReducers),
        EffectsModule.forFeature([ProductEffects])
    ],
    declarations: [
        ProductsPage
    ]
})
export class ProductsModule { }
