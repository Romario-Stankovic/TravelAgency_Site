import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FooterModule } from "src/components/footer/footer.module";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { DiscoveryComponent } from "./discovery.component";
import { SearchComponent } from './search/search.component';
import {MatChipsModule} from '@angular/material/chips'
import { CommonModule } from "@angular/common";
import { DestCardModule } from "src/components/dest-card/dest-card.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule(
    {
        declarations: [DiscoveryComponent, SearchComponent],
        imports: [
            NavbarModule,
            FooterModule,
            CommonModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatChipsModule,
            DestCardModule,
            MatProgressSpinnerModule
        ],
        providers: [],
        exports: [DiscoveryComponent]
    }
)
export class DiscoveryModule {}