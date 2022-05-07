import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiDestination } from 'src/models/destination.model';
import { DestinationService } from 'src/services/destination.service';
import * as KeyCode from "@angular/cdk/keycodes";
import { MatChipInputEvent } from '@angular/material/chips';


interface Category {
    value: string;
}

@Component({
    selector: 'destination-dialog',
    templateUrl: './destination-dialog.component.html',
    styleUrls: ['./destination-dialog.component.css']
})
export class DestinationDialogComponent implements OnInit {

    destinationForm = new FormGroup({
        name: new FormControl(""),
        description: new FormControl(""),
        file: new FormControl("")
    });

    addOnBlur = true;
    categories: Category[] = [];
    file? : File = undefined;
    readonly separatorKeyCodes = [KeyCode.SPACE, KeyCode.COMMA, KeyCode.ENTER] as const;

    constructor(
        private dialogRef: MatDialogRef<DestinationDialogComponent>,
        private destinationService: DestinationService,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: ApiDestination
    ) { }

    ngOnInit(): void {
        this.destinationForm.setValue({
            name: this.data?.name != undefined ? this.data.name : "",
            description: this.data?.description != undefined ? this.data.description : "",
            file: null
        });

        this.categories = this.data?.categories.map(cat => {
            return {
                value: cat
            };
        });

        if(this.categories != undefined && this.categories.length > 0){
            this.categories.splice(0, 1);
        }else{
            this.categories = [];
        }
    }

    create() {
        let categories = "";
        for(let i=0; i<this.categories.length; i++){
            categories += this.categories[i].value + (i == this.categories.length-1 ? "" : ";");
        }

        let data = new FormData();
        data.append("name", this.destinationForm.value.name);
        data.append("description", this.destinationForm.value.description);
        data.append("categories", categories);
        data.append("image", this.file != undefined? this.file : "");
        this.destinationService.create(data).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Create failed", "OK!");
            }else{
                this.snackBar.open("Create successful", "OK!");
            }
            this.dialogRef.close();
        })
    }
    
    update() {
        let categories = "";
        for(let i=0; i<this.categories.length; i++){
            categories += this.categories[i].value + (i == this.categories.length-1 ? "" : ";");
        }

        let data = new FormData();
        data.append("name", this.destinationForm.value.name);
        data.append("description", this.destinationForm.value.description);
        data.append("categories", categories);
        data.append("image", this.file != undefined? this.file : "");
        this.destinationService.update(this.data._id ,data).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Update failed", "OK!");
            }else{
                this.snackBar.open("Update successful", "OK!");
            }
            this.dialogRef.close();
        })
    }

    addChip(event: MatChipInputEvent) {
        let value = (event.value || "").trim().toLowerCase();

        if (value) {
            this.categories.push({ value: value });
        }
        event.chipInput!.clear();
    }

    removeChip(chip: Category) {
        let index = this.categories.indexOf(chip);
        if (index >= 0) {
            this.categories.splice(index, 1);
        }
    }

    setFile(event : any){
        this.file = event.target.files[0];
    }

}
