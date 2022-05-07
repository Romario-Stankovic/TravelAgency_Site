import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { ApiReview } from 'src/models/review.model';
import { DestinationService } from 'src/services/destination.service';

@Component({
    selector: 'destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

    data? : ApiDestination;
    reviews : ApiReview[] = [];

    loading = false;

    params !: Params;

    constructor(
        private destinationService: DestinationService,
        private route : ActivatedRoute,
        private router : Router,
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
        this.loadData();
    }

    loadData() {
        this.destinationService.getByID(this.params["id"]).subscribe(data => {
            if ("statusCode" in data) {
                this.router.navigateByUrl("/");
            } else {
                data.imageUrl = environment.apiUrl + "/" + data.imageUrl;
                this.data = data;
            }
        });
        this.loading = true;
        this.destinationService.getReviews(this.params["id"]).subscribe(data => {
            if ("statusCode" in data) {
                this.reviews = [];
            } else {
                this.reviews = data;
            }
            this.loading = false;
        });
    }

}
