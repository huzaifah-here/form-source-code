import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleAutoCompleteComponent } from './simple-auto-complete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        SimpleAutoCompleteComponent
    ],
    exports: [
        SimpleAutoCompleteComponent
    ],
    imports: [
        CommonModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class SimpleAutoCompleteModule { }
