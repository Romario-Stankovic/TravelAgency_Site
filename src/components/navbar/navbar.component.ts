import { Component, HostListener, Input } from "@angular/core";

import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { LoginComponent } from "./login/login.component";

@Component(
    {
        selector: "navbar",
        templateUrl: "./navbar.component.html",
        styleUrls: ["./navbar.component.css"]
    }
)
export class NavbarComponent {

    @Input()
    overlap : boolean = false;

    sidenavOpen = false;

    constructor(public dialog: MatDialog) { }

    openSideNav(){
        this.sidenavOpen = true;
    }

    showLoginDialog() {
        let dialogRef = this.dialog.open(LoginComponent, {
            data: {
                selectedTab: 0
            },
            panelClass: "loginDialog"
        });
    }

    showRegisterDialog() {
        let dialogRef = this.dialog.open(LoginComponent, {
            data: {
                selectedTab: 1
            },
            panelClass: "loginDialog"
        });
    }

}