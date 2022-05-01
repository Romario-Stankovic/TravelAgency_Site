import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from 'src/pages/home/home.module';
import { DiscoveryModule } from 'src/pages/discovery/discovery.module';
import { DestinationService } from 'src/services/destination.service';
import { GeneralService } from 'src/services/general.service';
import { UserService } from 'src/services/user.service';
import { DestinationModule } from 'src/pages/destination/destination.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeModule,
        DiscoveryModule,
        DestinationModule
    ],
    providers: [GeneralService, DestinationService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
