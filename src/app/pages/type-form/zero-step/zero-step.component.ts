import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-zero-step',
  templateUrl: './zero-step.component.html',
  styleUrls: ['./zero-step.component.scss']
})
export class ZeroStepComponent implements OnInit,OnDestroy{
  form: FormGroup = this.initForms();
  @Output() onFormValueChange = new EventEmitter<any>();
  //@ts-ignore
  formSubscription: Subscription = '';
  constructor(
    private _formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
     this.initForValueChangesSubscription()
  }
  initForValueChangesSubscription(){
    this.formSubscription = this.form.valueChanges.subscribe((value)=>{
      console.log('valueChanges', value.email);
      this.onFormValueChange.emit(value?.email)
    });
  }
  initForms(){
    return  this._formBuilder.group({
      email: ['', Validators.required],
    });


  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
