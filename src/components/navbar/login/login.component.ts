import { Component, Inject } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiResponse } from "src/models/response.model";
import { UserService } from "src/services/user.service";
import { CustomValidators } from "src/validators/validators";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {

    loading = false;
    showLoginPassword = false;
    showRegisterPassword = false;

    invalidEmail = false;
    invalidPassword = false;

    userExists = false;

    registerForm = new FormGroup(
        {
            name: new FormControl("", [Validators.required, Validators.minLength(1)]),
            lastName: new FormControl("", [Validators.required, Validators.minLength(1)]),
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required, Validators.minLength(8)]),
            confirmPassword: new FormControl("", [Validators.required, CustomValidators.passwordMatch()])
        }
    );
    loginForm = new FormGroup(
        {
            email: new FormControl("", [CustomValidators.notEmpty()]),
            password: new FormControl("", [CustomValidators.notEmpty()])
        }
    );

    constructor(
        public dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { selectedTab: number; },
        private userService: UserService,
        private snackBar: MatSnackBar
    ) { }

    login() {
        if (!this.loginForm.valid) {
            return;
        }

        let data = this.loginForm.value;
        this.loading = true;
        this.userService.login(data.email, data.password).subscribe(data => {
            if ("statusCode" in data) {
                switch (data.statusCode) {
                    case 1001:
                        this.invalidEmail = true;
                        this.invalidPassword = false;
                        break;
                    case 2002:
                        this.invalidPassword = true;
                        this.invalidEmail = false;
                        break;
                }
            } else {
                this.userService.saveLoginCredentials(data);
                this.dialogRef.close();
                this.snackBar.open("Successfully logged in!", "OK");
            }
            this.loading = false;
        });
    }

    register() {
        if (!this.registerForm.valid) {
            return;
        }
        let data = this.registerForm.value;
        this.loading = true;
        this.userService.register(data.name, data.lastName, data.email, data.password).subscribe(data => {
            if ("statusCode" in data) {
                switch (data.statusCode) {
                    case 2001:
                        this.userExists = true;
                        break;
                }
            } else {
                this.dialogRef.close();
                this.snackBar.open("Registration successful!", "OK");
            }
            this.loading = false;
        })
    }

}