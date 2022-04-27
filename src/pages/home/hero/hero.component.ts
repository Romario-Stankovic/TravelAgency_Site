import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
    @Input()
    motd = "";
    ngOnInit(): void {
        setTimeout(() => {
            if(this.motd === ""){
                this.motd = "Failed to load motd";
            }
        }, 1000);
    }

}