import { Component, Inject } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CustomValidators } from "src/validators/validators";

@Component({
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    loading = false;
    showLoginPassword = false;
    showRegisterPassword = false;

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
        @Inject(MAT_DIALOG_DATA) public data: { selectedTab: number; }
    ) { }

    login() {
        if(!this.loginForm.valid){
            return;
        }
        let data = this.loginForm.value;
        console.log({
            data
        });
        this.loading = true;
    }

    register() {
        if (!this.registerForm.valid) {
            return;
        }
        let data = this.registerForm.value;
        console.log({
            data
        });
        this.loading= true;
    }



}