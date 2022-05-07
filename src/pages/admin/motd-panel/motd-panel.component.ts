import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiMotd } from 'src/models/motd.model';
import { MotdService } from 'src/services/motd.service';
import { MotdDialogComponent } from './motd-dialog/motd-dialog.component';

@Component({
    selector: 'motd-panel',
    templateUrl: './motd-panel.component.html',
    styleUrls: ['./motd-panel.component.css']
})
export class MotdPanelComponent implements OnInit {

    motds : ApiMotd[] = [];

    constructor(
        private dialog : MatDialog,
        private snackBar : MatSnackBar,
        private motdService : MotdService
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){
        this.motdService.getAllMotds().subscribe(data => {
            if("statusCode" in data){
                this.motds = [];
            }else{
                this.motds = data;
            }
        });
    }

    showMotdDialog(data? : ApiMotd){
        this.dialog.open(MotdDialogComponent, {
            data: data,
            panelClass: "dialog",
        }).afterClosed().subscribe(() => {
            this.loadData();
        });
    }

    deleteMotd(data : ApiMotd){
        this.motdService.deleteMotd(data._id).subscribe(data => {
            if("statusCode" in data){
                this.snackBar.open("Failed to delete MOTD", "OK");
            }else{
                this.snackBar.open("Delete successful", "OK");
                this.loadData();
            }
        });
    }

}
