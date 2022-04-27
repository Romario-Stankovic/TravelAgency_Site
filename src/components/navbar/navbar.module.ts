import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "./navbar.component";
import { LoginComponent } from "./login/login.component";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [
        NavbarComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule,
        MatInputModule,
        MatProgressBarModule,
        MatIconModule,
        RouterModule,
        MatSidenavModule
    ],
    providers: [],
    exports: [NavbarComponent]
})
export class NavbarModule {

}