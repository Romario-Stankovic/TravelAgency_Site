import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/services/booking.service';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'booking-dialog',
    templateUrl: './booking-dialog.component.html',
    styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent {
    loading = false;

    min = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString();

    constructor(
        private bookingService: BookingService,
        private userService: UserService,
        private snackBar: MatSnackBar,
        private dialogRef: MatDialogRef<BookingDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { destinationId: string; },
    ) { }

    bookingForm = new FormGroup({
        date: new FormControl("", [Validators.required]),
        days: new FormControl("", [Validators.required, Validators.min(1), Validators.max(14), Validators.pattern(/^[0-9]+$/)])
    });

    createBooking() {
        if (!this.bookingForm.valid) {
            return;
        }
        let formData = this.bookingForm.value;
        this.loading = true;
        let userId = this.userService.loggedInUser?._id;
        this.bookingService.createBooking(userId != undefined ? userId : "", this.data.destinationId, formData.date, formData.days).subscribe(response => {
            this.loading = false;
            if ("statusCode" in response) {
                this.snackBar.open("Failed to make a reservation", "OK");
            } else {
                this.snackBar.open("Reservation successful", "OK");
                this.dialogRef.close();
            }
        });
    }

}
