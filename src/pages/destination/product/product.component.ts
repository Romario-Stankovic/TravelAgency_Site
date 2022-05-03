import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiDestination } from 'src/models/destination.model';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input()
    data?: ApiDestination;

    constructor(
        private dialog: MatDialog
    ) { }

    showDialog() {
        this.dialog.open(BookingDialogComponent, {
            panelClass: "dialog"
        });
    }

}
