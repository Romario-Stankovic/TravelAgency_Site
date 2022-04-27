import { Component, Input, OnInit } from '@angular/core';
import { ApiFaq } from 'src/models/faq.model';

@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    @Input()
    faq : ApiFaq[] = [];
    loading = true;

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {this.loading = false}, 5000);
    }

}
