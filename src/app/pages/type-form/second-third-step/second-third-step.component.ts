import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-second-third-step',
  templateUrl: './second-third-step.component.html',
  styleUrls: ['./second-third-step.component.scss']
})
export class SecondThirdStepComponent implements OnInit,OnDestroy{
  form: FormGroup = this.initForms();
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
      console.log('valueChanges', value);
      this.onFormValueChange.emit(value)
    });
  }
  scrollToTop(){
       // console.log('scroll to top');
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }
  initForms(){
    return  this._formBuilder.group({
    
      aboutSectionContent: ['', Validators.required],
    });


  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
