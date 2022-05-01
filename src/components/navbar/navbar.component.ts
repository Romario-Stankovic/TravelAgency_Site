import { Component, HostListener, Input } from "@angular/core";

import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { UserService } from "src/services/user.service";
import { EditSelfComponent } from "./edit-self/edit-self.component";
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

    constructor(
        public dialog: MatDialog,
        public userService : UserService) { }

    showLoginDialog() {
        this.dialog.open(LoginComponent, {
            data: {
                selectedTab: 0
            },
            panelClass: "loginDialog"
        });
    }

    showRegisterDialog() {
        this.dialog.open(LoginComponent, {
            data: {
                selectedTab: 1
            },
            panelClass: "loginDialog"
        });
    }

    showEditDialog() {
        this.dialog.open(EditSelfComponent, {
            panelClass: "loginDialog"
        });
    }

    logout(){
        this.userService.logout();
    }

}