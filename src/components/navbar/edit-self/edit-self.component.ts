import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/services/user.service';

@Component({
    selector: 'edit-self',
    templateUrl: './edit-self.component.html',
    styleUrls: ['./edit-self.component.css']
})
export class EditSelfComponent implements OnInit {
    showEditPassword = false;

    userExists = false;

    loading = false;

    editForm = new FormGroup(
        {
            name: new FormControl("", [Validators.required, Validators.minLength(1)]),
            lastName: new FormControl("", [Validators.required, Validators.minLength(1)]),
            email: new FormControl("", [Validators.required, Validators.email]),
        }
    );

    constructor(
        public dialogRef: MatDialogRef<EditSelfComponent>,
        private userService: UserService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        let user = this.userService.loggedInUser;
        if (user != undefined) {
            this.editForm.setValue({
                name: user.name,
                lastName: user.lastName,
                email: user.email
            });
        }
    }

    edit() {
        if (!this.editForm.valid) {
            return;
        }

        let data = this.editForm.value;
        let id = this.userService.loggedInUser?._id;
        this.loading = true;
        this.userService.update(id != undefined ? id : "", data.name, data.lastName, data.email, undefined).subscribe(data => {
            if ("statusCode" in data) {
                switch (data.statusCode) {
                    case 1003:
                        this.userExists = true;
                        break;
                }
            } else {
                this.userService.saveLoginCredentials(data);
                console.log(this.userService.loggedInUser);
                this.dialogRef.close();
                this.snackBar.open("Successfully updated info", "OK");
            }
            this.loading = false;
        });
    }

}
