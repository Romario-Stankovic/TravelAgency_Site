import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as KeyCodes from "@angular/cdk/keycodes";
import { MatChipInputEvent } from '@angular/material/chips';

interface Filter {
    value: string;
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    addOnBlur = true;
    readonly separatorKeyCodes = [KeyCodes.SPACE, KeyCodes.COMMA, KeyCodes.ENTER] as const;
    filters : Filter[] = [];

    @Output() searchFilters = new EventEmitter<Filter[]>();

    add(event : MatChipInputEvent){
        let value = (event.value || '').trim();

        if(value){
            this.filters.push({value:value});
        }
        event.chipInput!.clear();
    }

    remove(filter : Filter){
        let index = this.filters.indexOf(filter);
        if(index >= 0){
            this.filters.splice(index, 1);
        }
    }

    search(){
        this.searchFilters.emit(this.filters);
    }

}
