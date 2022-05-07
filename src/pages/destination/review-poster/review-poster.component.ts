import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { DestinationService } from 'src/services/destination.service';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'review-poster',
    templateUrl: './review-poster.component.html',
    styleUrls: ['./review-poster.component.css']
})
export class ReviewPosterComponent implements OnInit {

    reviewForm = new FormGroup({
        score: new FormControl("", Validators.required),
        text: new FormControl("")
    });

    params !: Params;

    constructor(
        private destinationService: DestinationService,
        private userService: UserService,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) { }

    @Output() refreshReviews: EventEmitter<void> = new EventEmitter();

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
    }

    postReview() {
        this.reviewForm.markAllAsTouched();
        if (!this.reviewForm.valid) {
            return;
        }
        let formData = this.reviewForm.value;
        let userId = this.userService.loggedInUser?._id;
        let destinationId = this.params["id"];
        this.destinationService.postReview(userId != undefined ? userId : "", destinationId, formData.score, formData.text).subscribe(data => {
            if ("statusCode" in data) {
                this.snackBar.open("Failed to post review, try again", "OK");
            } else {
                this.reviewForm.reset();
                this.snackBar.open("Successfully posted a review", "OK");
                this.refreshReviews.emit();
            }
        });
    }

}