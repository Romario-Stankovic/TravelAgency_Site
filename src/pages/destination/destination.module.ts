import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DestCardModule } from "src/components/dest-card/dest-card.module";
import { FooterModule } from "src/components/footer/footer.module";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { DestinationComponent } from "./destination.component";
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [DestinationComponent, ProductComponent],
    imports: [
        NavbarModule,
        FooterModule,
        MatCardModule,
        MatButtonModule,
        DestCardModule
    ],
    providers: [
        
    ],
    exports: [DestinationComponent]
})
export class DestinationModule {}