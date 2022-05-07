import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiUser } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

    userForm = new FormGroup({
        name: new FormControl(""),
        lastName: new FormControl(""),
        email: new FormControl(""),
        password: new FormControl("")
    })

    constructor(
        private dialogRef: MatDialogRef<UserDialogComponent>,
        private userService : UserService,
        private snackBar : MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: ApiUser,
    ) { }

    ngOnInit(): void {
        this.userForm.setValue({
            name: this.data?.name != undefined ? this.data.name : "",
            lastName: this.data?.lastName != undefined ? this.data.lastName : "",
            email: this.data?.email != undefined ? this.data.email: "",
            password: ""
        });
    }

    update() {
        this.userService.update(this.data._id, this.userForm.value.name, this.userForm.value.lastName, this.userForm.value.email, this.userForm.value.password !== "" ? this.userForm.value.password : undefined).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Update failed", "OK!");
            }else{
                this.snackBar.open("Update successful", "OK!");
            }
        })
        this.dialogRef.close();
    }

}
