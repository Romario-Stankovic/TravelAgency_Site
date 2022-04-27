import { NgModule } from "@angular/core";
import { FooterModule } from "src/components/footer/footer.module";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { DiscoveryComponent } from "./discovery.component";

@NgModule(
    {
        declarations: [DiscoveryComponent],
        imports: [
            NavbarModule,
            FooterModule
        ],
        providers: [],
        exports: [DiscoveryComponent]
    }
)
export class DiscoveryModule {}