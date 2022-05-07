import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"]
})
export class HeroComponent {
    @Input()
    motd = "";

}