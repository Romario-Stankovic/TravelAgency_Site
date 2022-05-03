import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/services/booking.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
    loading = false;

    min = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString();

    constructor(
        private bookingService : BookingService,
        private userService : UserService,
        private route : ActivatedRoute,
        private snackBar : MatSnackBar
    ){}

    ngOnInit(){
        console.log(this.min);
    }

    bookingGroup = new FormGroup({
        date: new FormControl("", [Validators.required]),
        days: new FormControl("", [Validators.required, Validators.min(1), Validators.max(14), Validators.pattern(/^[0-9]+$/)])
    })

    createBooking() {
        if (!this.bookingGroup.valid) {
            return;
        }
        let data = this.bookingGroup.value;
        this.loading = true;
        let userId = this.userService.loggedInUser?._id;
        this.route.queryParams.subscribe(params => {
            let destinationId = params["id"];
            if (userId != undefined) {
                this.bookingService.createBooking(userId, destinationId, data.date, data.days).subscribe(data => {
                    this.loading = false;
                    if("statusCode" in data) {
                        this.snackBar.open("Failed to make a reservation", "OK");
                    }else{
                        this.snackBar.open("Reservation successful", "OK");
                    }
                });

            }else{
                this.snackBar.open("Failed to make a reservation", "OK");
                this.loading = false;
            }
        });
    }

}
