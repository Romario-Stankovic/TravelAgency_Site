import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DestCardModule } from "src/components/dest-card/dest-card.module";
import { FooterModule } from "src/components/footer/footer.module";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { DestinationService } from "src/services/destination.service";
import { GeneralService } from "src/services/general.service";
import { HeroComponent } from "./hero/hero.component";
import { HomeComponent } from "./home.component";
import { TopRatedComponent } from "./top-picks/top-rated.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FaqComponent } from "./faq/faq.component";
import {MatExpansionModule} from '@angular/material/expansion';
import { AboutComponent } from './about/about.component'

@NgModule(
    {
        declarations: [
            HomeComponent,
            HeroComponent,
            TopRatedComponent,
            FaqComponent,
            AboutComponent
        ],
        imports: [
            NavbarModule,
            CommonModule,
            DestCardModule,
            FooterModule,
            MatProgressSpinnerModule,
            MatButtonModule,
            MatExpansionModule
        ],
        providers: [],
        exports: [HomeComponent]
    }
)
export class HomeModule { }