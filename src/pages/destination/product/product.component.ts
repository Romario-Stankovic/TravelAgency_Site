import { Component, Input, OnInit } from '@angular/core';
import { ApiDestination } from 'src/models/destination.model';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input()
    data?: ApiDestination;

    constructor() { }

    ngOnInit(): void {

    }

}
