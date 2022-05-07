import { Component, Input, OnInit } from '@angular/core';
import { ApiDestination } from 'src/models/destination.model';

@Component({
    selector: 'destination-panel',
    templateUrl: './destination-panel.component.html',
    styleUrls: ['./destination-panel.component.css']
})
export class DestinationPanelComponent implements OnInit {

    @Input()
    data : ApiDestination[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
