import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { DestinationService } from 'src/services/destination.service';

@Component({
    selector: 'discovery',
    templateUrl: './discovery.component.html',
    styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {

    constructor(
        private destinationService : DestinationService
    ) { }

    destinations : ApiDestination[] = [];

    loading = false;
    ngOnInit(): void {
        this.getDestinations();
    }

    searchSubmit(filter : {value: string}[]){
        let filters = filter.reduce((result : string[], value) : string[] => {
            result.push(value.value.toLowerCase());
            return result;
        }, []);
        this.getDestinations(filters);
    }

    getDestinations(filter: string[] = []){
        this.destinationService.getFiltered(filter).subscribe(data => {
            if("statusCode" in data){
                this.destinations = [];
            }else{
                this.destinations = data;
                for(let dest of this.destinations){
                    dest.imageUrl = environment.apiUrl + "/" + dest.imageUrl;
                }
            }
        })
    }

}
