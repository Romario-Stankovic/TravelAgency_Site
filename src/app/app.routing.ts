import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryComponent } from 'src/pages/discovery/discovery.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { DestinationComponent } from 'src/pages/destination/destination.component';
import { AdminComponent } from 'src/pages/admin/admin.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "discovery", component: DiscoveryComponent },
    { path: "destination", component: DestinationComponent },
    { path: "admin", component: AdminComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
