import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

/** 
 * 6. Implements at least one dumb or presentational component that does not make use of services for displaying product 
 */
@Component({
    selector: 'product-view',
    templateUrl: 'product-view.component.html'
})
export class ProductViewComponent implements OnInit {
    @Input() product: Product;

    // badges array to display svgs using ngFor
    badges = ['badge-ECO', 'badge-NLP', 'badge-SB', 'badge-ES'];

    constructor() {}
    ngOnInit(){}

    /**
     * Calculate and return rating percentage to display stars
     * @param rating 
     */
    getRating(rating) {
        let result = rating? rating * 20 : 0;
        return result + '%';
    }
}