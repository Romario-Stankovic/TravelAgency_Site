import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { UserPanelComponent } from './user-panel/user-panel.component';
import { DestinationPanelComponent } from './destination-panel/destination-panel.component';
import { FaqPanelComponent } from './faq-panel/faq-panel.component';
import { MotdPanelComponent } from './motd-panel/motd-panel.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MotdDialogComponent } from './motd-panel/motd-dialog/motd-dialog.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaqDialogComponent } from "./faq-panel/faq-dialog/faq-dialog.component";
import { UserDialogComponent } from './user-panel/user-dialog/user-dialog.component';

@NgModule({
    declarations: [AdminComponent, UserPanelComponent, DestinationPanelComponent, FaqPanelComponent, MotdPanelComponent, MotdDialogComponent, FaqDialogComponent, UserDialogComponent],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [AdminComponent]
})
export class AdminModule {
    
}