import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ApiDestination } from 'src/models/destination.model';
import { DestinationService } from 'src/services/destination.service';
import { DestinationDialogComponent } from './destination-dialog/destination-dialog.component';

@Component({
    selector: 'destination-panel',
    templateUrl: './destination-panel.component.html',
    styleUrls: ['./destination-panel.component.css']
})
export class DestinationPanelComponent implements OnInit {

    destinations : ApiDestination[] = [];

    constructor(
        private dialog : MatDialog,
        private snackBar : MatSnackBar,
        private destinationService : DestinationService
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){
        this.destinationService.getAll().subscribe(data => {
            if("statusCode" in data){
                this.destinations = [];
            }else{
                for(let dest of data){
                    dest.imageUrl = environment.apiUrl + "/" + dest.imageUrl;
                }
                this.destinations = data;
            }
        })
    }

    showDestinationDialog(data? : ApiDestination) {
        this.dialog.open(DestinationDialogComponent, {
            data: data,
            panelClass: "dialog"
        }).afterClosed().subscribe(() => {
            this.loadData();
        });
    }

    delete(data : ApiDestination) {
        this.destinationService.delete(data._id).subscribe(data => {
            if("statusCode" in data){
                this.snackBar.open("Failed to delete MOTD", "OK");
            }else{
                this.snackBar.open("Delete successful", "OK");
                this.loadData();
            }
        })
    }

}
