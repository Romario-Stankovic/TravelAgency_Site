import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent {
    @Input()
    score? = 0;
    @Input()
    ratings? = 0;
    @Input()
    drawCount = true;

}
