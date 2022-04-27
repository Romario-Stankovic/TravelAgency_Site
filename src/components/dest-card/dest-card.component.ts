import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiDestination } from 'src/models/destination.model';

@Component({
    selector: 'dest-card',
    templateUrl: './dest-card.component.html',
    styleUrls: ['./dest-card.component.css']
})
export class DestCardComponent {

    @Input()
    data : ApiDestination = {
        name: "${destination}",
        description: "${description}",
        imageUrl: "${imageUrl}",
        score: 0,
        reviews: 0
    };

}
