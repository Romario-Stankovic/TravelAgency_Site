import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiFaq } from 'src/models/faq.model';
import { FaqService } from 'src/services/faq.service';

@Component({
    selector: 'faq-dialog',
    templateUrl: './faq-dialog.component.html',
    styleUrls: ['./faq-dialog.component.css']
})
export class FaqDialogComponent implements OnInit {

    faqForm = new FormGroup({
        question: new FormControl(""),
        answer: new FormControl("")
    })

    constructor(
        private dialogRef : MatDialogRef<FaqDialogComponent>,
        private faqService : FaqService,
        private snackBar : MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data : ApiFaq
    ) { }

    ngOnInit(): void {
        this.faqForm.setValue({
            question: this.data?.question != undefined ? this.data.question : "",
            answer: this.data?.answer != undefined ? this.data.answer : "",
        })
    }

    create() {
        this.faqService.createFaq(this.faqForm.value.question, this.faqForm.value.answer).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Creation failed", "OK!");
            }else{
                this.snackBar.open("Creation successful", "OK!");
            }
        });
        this.dialogRef.close();
    }

    update() {
        this.faqService.updateFaq(this.data._id, this.faqForm.value.question, this.faqForm.value.answer).subscribe(data => {
            if("statusCode" in data) {
                this.snackBar.open("Update failed", "OK!");
            }else{
                this.snackBar.open("Update successful", "OK!");
            }
        });
        this.dialogRef.close();
    }

}
