import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeFormRoutingModule } from './type-form-routing.module';
import { TypeFormComponent } from './type-form.component';
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import {SimpleAutoCompleteModule} from "../shared/simple-auto-complete/simple-auto-complete.module";
import { MatAutocompleteModule} from "@angular/material/autocomplete";
import { FifthStepComponent } from './fifth-step/fifth-step.component';
import { SixthStepComponent } from './sixth-step/sixth-step.component';
import {FourthStepComponent} from "./fourth-step/fourth-step.component";
import {MatIconModule} from "@angular/material/icon";
import { SeventhStepComponent } from './seventh-step/seventh-step.component';
import { MessageStepComponent } from './message-step/message-step.component';
import { ZeroStepComponent } from './zero-step/zero-step.component';
import { WritingSamplesComponent } from './writing-samples/writing-samples.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SecondThirdStepComponent } from './second-third-step/second-third-step.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ThirdFourthStepComponent } from './third-fourth-step/third-fourth-step.component';
import { FourthFifthStepComponent } from './fourth-fifth-step/fourth-fifth-step.component';
// import {IconModule} from '@visurel/iconify-angular';



@NgModule({
  declarations: [
    TypeFormComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FifthStepComponent,
    SixthStepComponent,
    FourthStepComponent,
    SeventhStepComponent,
    MessageStepComponent,
    ZeroStepComponent,
    WritingSamplesComponent,
    UploadCvComponent,
    SecondThirdStepComponent,
    ThirdFourthStepComponent,
    FourthFifthStepComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    TypeFormRoutingModule,
    MatSnackBarModule,
    SimpleAutoCompleteModule
  ]
})
export class TypeFormModule { }
