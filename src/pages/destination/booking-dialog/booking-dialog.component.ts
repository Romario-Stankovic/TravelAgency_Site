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
    max? : string = undefined;
    constructor(
        private bookingService: BookingService,
        private userService: UserService,
        private snackBar: MatSnackBar,
        private dialogRef: MatDialogRef<BookingDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { destinationId: string; },
    ) { }

    bookingForm = new FormGroup({
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required])
    });

    setStartDate(start : HTMLInputElement){
        this.max = new Date((new Date(start.value).getTime()  + 1000 * 60 * 60 * 24 * 13)).toISOString();
    }

    createBooking() {
        if (!this.bookingForm.valid) {
            return;
        }
        let formData = this.bookingForm.value;
        this.loading = true;
        let userId = this.userService.loggedInUser?._id;
        this.bookingService.create(userId != undefined ? userId : "", this.data.destinationId, formData.startDate, formData.endDate).subscribe(response => {
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
