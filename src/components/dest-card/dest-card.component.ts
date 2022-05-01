import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDestination } from 'src/models/destination.model';

@Component({
    selector: 'dest-card',
    templateUrl: './dest-card.component.html',
    styleUrls: ['./dest-card.component.css']
})
export class DestCardComponent {

    @Input()
    data? : ApiDestination;

    constructor(
        private router : Router
    ){}

    viewDestination(){
        this.router.navigateByUrl(`destination?id=${this.data?._id}`);
    }

}
