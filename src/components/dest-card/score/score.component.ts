import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
    @Input()
    score = 0;
    scoreIcons: string[] = [];
    ngOnInit(): void {
        for (let i = 1; i <= 5; i++) {
            if (i <= this.score) {
                this.scoreIcons.push("star");
            } else if (i > this.score && i - 1 < this.score) {
                this.scoreIcons.push("star_half");
            } else {
                this.scoreIcons.push("star_border");
            }
        }
    }


}
