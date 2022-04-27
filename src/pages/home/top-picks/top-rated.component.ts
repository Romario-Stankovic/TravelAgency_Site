import { Component, Input, OnInit } from '@angular/core';
import { ApiDestination } from 'src/models/destination.model';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit{
    @Input()
    destinations : ApiDestination[] = [];
    loading = true;

    ngOnInit(): void {
        setTimeout(() => {this.loading = false}, 5000);
    }
}
