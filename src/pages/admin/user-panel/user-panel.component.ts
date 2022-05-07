import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiUser } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
    selector: 'user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

    users : ApiUser[] = [];

    constructor(
        private dialog : MatDialog,
        private snackBar : MatSnackBar,
        private userService : UserService
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){
        this.userService.getAllUsers().subscribe(data => {
            if("statusCode" in data){
                this.users = [];
            }else {
                this.users = data;
            }
        });
    }

    showUserDialog(data? : ApiUser){
        this.dialog.open(UserDialogComponent, {
            data: data,
            panelClass: "dialog"
        }).afterClosed().subscribe(() => {
            this.loadData();
        });
    }

    delete(data : ApiUser){
        this.userService.delete(data._id).subscribe(data => {
            if("statusCode" in data){
                this.snackBar.open("Failed to delete MOTD", "OK");
            }else{
                this.snackBar.open("Delete successful", "OK");
                this.loadData();
            }
        });
    }

}
