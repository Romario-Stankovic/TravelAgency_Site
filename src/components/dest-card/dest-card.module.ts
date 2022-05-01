import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DestCardComponent } from "./dest-card.component";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ScoreComponent } from "./score/score.component";

@NgModule(
    {
        declarations: [DestCardComponent, ScoreComponent],
        imports: [
            MatCardModule,
            CommonModule,
            MatIconModule,
            MatButtonModule,
        ],
        providers: [],
        exports: [DestCardComponent, ScoreComponent]
    }
)
export class DestCardModule { }