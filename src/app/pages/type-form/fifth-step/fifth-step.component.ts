import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-fifth-step',
  templateUrl: './fifth-step.component.html',
  styleUrls: ['./fifth-step.component.scss']
})
export class FifthStepComponent {
  form: FormGroup = this.initForms();
  sectionFlag = true;
  @Output() onFormValueChange = new EventEmitter<any>();
  //@ts-ignore
  formSubscription: Subscription = '';
  constructor(
    private _formBuilder: FormBuilder,
  ){

  }

  ngOnInit(): void {
    this.onFormValueChange.emit(this.form.getRawValue());
    this.initForValueChangesSubscription()
  }
  initForValueChangesSubscription(){
    this.formSubscription = this.form.valueChanges.subscribe((value)=>{
      this.onFormValueChange.emit(value)
    });
  }

  initForms(){
    return  this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });


  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
