import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { DestinationService } from 'src/services/destination.service';

@Component({
    selector: 'destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

    data? : ApiDestination;

    constructor(
        private destinationService: DestinationService,
        private route : ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.destinationService.getByID(params["id"]).subscribe(data => {
                data.imageUrl = environment.apiUrl + "/" + data.imageUrl;
                this.data = data;
            });
        })
    }

}
