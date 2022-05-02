import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { ApiFaq } from 'src/models/faq.model';
import { DestinationService } from 'src/services/destination.service';
import { GeneralService } from 'src/services/general.service';

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
        private generalService : GeneralService,
        private destinationService : DestinationService
        ){}
    ngOnInit(): void {
        
        this.generalService.getRandomMotd().subscribe(data => {
            this.motd = data.message;
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

        this.generalService.getFaq().subscribe(data => {
            this.faq = data;
        });

    }

}
