import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sixth-step',
  templateUrl: './sixth-step.component.html',
  styleUrls: ['./sixth-step.component.scss']
})
export class SixthStepComponent {
  form: FormGroup = this.initForms();
  sectionFlag = false;
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

      address: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
