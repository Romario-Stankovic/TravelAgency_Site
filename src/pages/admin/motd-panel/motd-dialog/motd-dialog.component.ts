import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiMotd } from 'src/models/motd.model';
import { MotdService } from 'src/services/motd.service';

@Component({
    selector: 'motd-dialog',
    templateUrl: './motd-dialog.component.html',
    styleUrls: ['./motd-dialog.component.css']
})
export class MotdDialogComponent implements OnInit {

    motdForm = new FormGroup({
        message: new FormControl("")
    });

    constructor(
        private dialogRef: MatDialogRef<MotdDialogComponent>,
        private motdService : MotdService,
        private snackBar : MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: ApiMotd,
    ) { }

    ngOnInit(): void {
        this.motdForm.setValue({
            message: this.data?.message != undefined ? this.data.message : ""
        });
    }

    create(){
        this.motdService.create(this.motdForm.value.message).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Creation failed", "OK!");
            }else{
                this.snackBar.open("Creation successful", "OK!");
            }
        });
        this.dialogRef.close();
    }

    update(){
        this.motdService.update(this.data._id, this.motdForm.value.message).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Update failed", "OK!");
            }else{
                this.snackBar.open("Update successful", "OK!");
            }
        });
        this.dialogRef.close();
    }

}
