import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/product/product.page';
import {SharedModule} from '@shared/shared.module';
import {ProductViewComponent} from '../product/pages/product-view/product-view.component';

export const productRoutes: Routes = [
    /**
     * 3. Route has been configured correctly so that when a user clicks on a product link from the landing page, user is navigated to that product with the corresponding route
     */
   {
        path: ':id',
        component: ProductPage
    },
   
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
    ],
    declarations: [
        ProductPage,
        ProductViewComponent
    ]
})
export class ProductModule {
}
