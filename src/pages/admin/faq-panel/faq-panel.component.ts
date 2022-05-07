import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiFaq } from 'src/models/faq.model';
import { FaqService } from 'src/services/faq.service';
import { FaqDialogComponent } from './faq-dialog/faq-dialog.component';

@Component({
    selector: 'faq-panel',
    templateUrl: './faq-panel.component.html',
    styleUrls: ['./faq-panel.component.css']
})
export class FaqPanelComponent implements OnInit {

    faqs : ApiFaq[] = [];

    constructor(
        private dialog : MatDialog,
        private snackBar : MatSnackBar,
        private faqService : FaqService
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){
        this.faqService.getAllFaq().subscribe(data => {
            if("statusCode" in data) {
                this.faqs = []
            }else {
                this.faqs = data;
            }
        });
    }

    showFaqDialog(data? : ApiFaq) {
        this.dialog.open(FaqDialogComponent, {
            data : data,
            panelClass : "dialog",
        }).afterClosed().subscribe(() => {
            this.loadData();
        });
    }

    delete(data : ApiFaq) {
        this.faqService.deleteFaq(data._id).subscribe(() => {
            if("statusCode" in data) {
                this.snackBar.open("Failed to delete MOTD", "OK");
            }else{
                this.snackBar.open("Delete successful", "OK");
                this.loadData();
            }
        });
    }

}
