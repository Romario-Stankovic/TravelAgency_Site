import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DestCardModule } from "src/components/dest-card/dest-card.module";
import { FooterModule } from "src/components/footer/footer.module";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { DestinationComponent } from "./destination.component";
import { ProductComponent } from './product/product.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [DestinationComponent, ProductComponent, BookingDialogComponent],
    imports: [
        CommonModule,
        NavbarModule,
        FooterModule,
        MatCardModule,
        MatButtonModule,
        DestCardModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatProgressBarModule,
        DestCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule
    ],
    providers: [
        
    ],
    exports: [DestinationComponent]
})
export class DestinationModule {}