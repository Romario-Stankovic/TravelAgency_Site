import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { ApiFaq } from 'src/models/faq.model';
import { ApiMotd } from 'src/models/motd.model';
import { ApiUser } from 'src/models/user.model';
import { DestinationService } from 'src/services/destination.service';
import { FaqService } from 'src/services/faq.service';
import { MotdService } from 'src/services/motd.service';
import { UserService } from 'src/services/user.service';
import { MotdDialogComponent } from './motd-panel/motd-dialog/motd-dialog.component';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

    page : string = "users";

    constructor() { }

    ngOnInit(): void {
        
        /* this.userService.getAllUsers().subscribe(data => {
            if("statusCode" in data){
                this.users = [];
            }else{
                this.users = data;
            }
        });

        this.faqService.getAllFaq().subscribe(data => {
            if("statusCode" in data){
                this.faqs = [];
            }else{
                this.faqs = data;
            }
        });

        this.destinationService.getFiltered([]).subscribe(data => {
            if("statusCode" in data) {
                this.destinations = [];
            }else{
                for(let dest of data){
                    dest.imageUrl = environment.apiUrl + "/" + dest.imageUrl;
                }
                this.destinations = data;
            }
        }); */

    }

    changePage(page: string){
        this.page = page;
    }

}
