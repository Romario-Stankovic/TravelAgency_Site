import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { ApiFaq } from 'src/models/faq.model';
import { DestinationService } from 'src/services/destination.service';
import { FaqService } from 'src/services/faq.service';
import { MotdService } from 'src/services/motd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    motd : string = "";
    topRated : ApiDestination[] = [];
    faq : ApiFaq[] = [];

    constructor(
        private motdService : MotdService,
        private destinationService : DestinationService,
        private faqService : FaqService
        ){}
    ngOnInit(): void {

        this.motdService.getRandom().subscribe(data => {
            if("statusCode" in data){
                this.motd = "Failed to load motd";
            }else{
                this.motd = data.message;
            }
        });

        this.destinationService.getTopRated().subscribe(data => {
            if("statusCode" in data){
                this.topRated = [];
            }else{
                this.topRated = data;
                for(let destination of this.topRated){
                    destination.imageUrl = environment.apiUrl + "/" + destination.imageUrl;
                }
            }
        });

        this.faqService.getAll().subscribe(data => {
            
            if("statusCode" in data){
                this.faq = [];
            }else{
                this.faq = data;
            }

        });

    }

}
