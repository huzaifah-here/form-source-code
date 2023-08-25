import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import icAdd from '@iconify/icons-ic/twotone-add';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],

})
export class ThirdStepComponent implements OnInit,OnDestroy{
  form: FormGroup = this.initForms();
  serviceFlag = false;
  editIndex: number = -1;
  public  icAdd = icAdd;
  serviceInitValue = '';
  defaultServices = [
    {
      'title': 'WEB DESIGN',
      'description': 'Vestibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
    {
      'title': 'GRAPHIC DESIGN',
      'description': 'estibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
    {
      'title': 'DEVELOPMENT',
      'description': 'estibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
    {
      'title': 'BRANDING',
      'description': 'estibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
    {
      'title': 'PHOTOGRAPHY',
      'description': 'estibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
    {
      'title': 'USER EXPERIENCE',
      'description': 'estibulum ex diam, tincidunt sed tellus eu, posuere pellentesque metus. Vivamus commodo lectus porttitor purus rutrum.'
    },
  ];
  @Output() onFormValueChange = new EventEmitter<any>();
  //@ts-ignore
  formSubscription: Subscription = '';
  constructor(
    private _formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.initDefaultServices();
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
      title: ['', Validators.required],
      description: ['', Validators.required],
      service: ['', Validators.required],
      aboutDescription: ['', Validators.required],
      services: new FormArray([]) ,
    });


  }
  initDefaultServices(){
    this.defaultServices.forEach((value) => {
      this.servicesArray().push(this.service(value?.title, value?.description));
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
  service(service = '', aboutDescription = ''){
    return  this._formBuilder.group({
      service: [service, Validators.required],
      aboutDescription: [aboutDescription, Validators.required],
    });
  }
  servicesArray() : FormArray {
    return this.form.get("services") as FormArray
  }
  onSelectValue(value: any){
    this.form.get('service')?.setValue(value);
  }
  toggleServices() {
    if (this.serviceFlag){
      this.serviceFlag = false;
      this.editIndex = -1;
      this.serviceInitValue = '';
      this.form.get('service')?.setValue('');
      this.form.get('aboutDescription')?.setValue('');
    }else
    {
      this.serviceFlag = true;
    }
  }
  editService(i: number){
    this.editIndex = i;
    console.log('value', i);
    this.form.get('service')?.setValue( this.servicesArray().at(i).get('service')?.value);
    this.form.get('aboutDescription')?.setValue( this.servicesArray().at(i).get('aboutDescription')?.value);
    this.toggleServices();
    this.serviceInitValue = this.form.get('service')?.value;
  }
  addService(i: number = this.editIndex){
    if (this.editIndex > -1){
      this.servicesArray().at(i).get('service')?.setValue( this.form.get('service')?.value);
      this.servicesArray().at(i).get('aboutDescription')?.setValue( this.form.get('aboutDescription')?.value);
    }
    else
    {
      this.servicesArray().push(this.service(
        this.form.get('service')?.value,
        this.form.get('aboutDescription')?.value,
      ));
    }
    //@ts-ignore
    this.toggleServices();
  }
  getServicesCount(){
    if (this.editIndex > -1){
      return this.editIndex + 1;
    }else {
      return this.servicesArray().length + 1;
    }
  }
  deleteItem(i: number){
    this.servicesArray().removeAt(i);
  }
  onValueSelect(event: any){
    this.form.get('service')?.setValue(event.value);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
