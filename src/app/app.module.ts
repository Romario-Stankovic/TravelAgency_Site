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
        DiscoveryModule
    ],
    providers: [GeneralService, DestinationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
