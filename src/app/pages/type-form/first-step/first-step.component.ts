import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit,OnDestroy {
  @Output() onFormValueChange = new EventEmitter<any>();
  //@ts-ignore
  formSubscription: Subscription = '';
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('event.target.innerWidth', event.target.innerWidth);
    // setTimeout(() => {
    //   window.scroll({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    // }, 2000)

  }
  scrollToTop(){
    // console.log('scroll to top');
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }

  form: FormGroup = this.initForms();
  editIndex: number = -1;
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

  initForms(){
    return  this._formBuilder.group({
      name: ['', Validators.required],
      skill: ['', Validators.required],
      skills: new FormArray([]) ,
    });


  }
  itemsArray() : FormArray {
    return this.form.get("skills") as FormArray
  }
  item(name = ''){
    return  this._formBuilder.group({
      name: [name, Validators.required],
    });
  }
  addItem(i: number =  this.editIndex){
    //@ts-ignore

    if (this.editIndex > -1){
      this.itemsArray().at(i).get('name')?.setValue( this.form.get('skill')?.value);
    }
    else
    {
      this.itemsArray().push(this.item(
        this.form.get('skill')?.value,
      ));
    }
    this.form.get('skill')?.setValue('');
  }
  editItem(i: number){
    this.editIndex = i;
    this.form.get('name')?.setValue( this.itemsArray().at(i).get('skill')?.value);
  }
  getSkills(){
    let skills = '';
    this.itemsArray().getRawValue().forEach((item: any, index: any) => {
      skills += item?.name;
      if (index != this.itemsArray().length-1)
      {
        skills += ', ';
      }

    });

    return skills;
  }
  deleteItem(i: number){
    this.itemsArray().removeAt(i);
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
