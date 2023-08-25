import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import icAdd from '@iconify/icons-ic/twotone-add';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.scss']
})
export class FourthStepComponent {
  form: FormGroup = this.initForms();
  itemsSectionFlag = false;
  editIndex: number = -1;
  public  icAdd = icAdd;
  serviceInitValue = '';
  defaultTestimonials = [
    {
      'title': 'Alice Peter',
      'position': 'Web Designer',
      'text': 'Mauris lacinia, lorem id dictum feugiat, felis diam egestas eros, et facilisis mauris nisi a enim. Pellentesque at ipsum congue.'
    },
    {
      'title': 'Michael Johnson',
      'position': 'CEO Founder',
      'text': 'Mauris lacinia, lorem id dictum feugiat, felis diam egestas eros, et facilisis mauris nisi a enim. Pellentesque at ipsum congue.'
    },
    {
      'title': 'Jeannette Broad',
      'position': 'Creative Director',
      'text': 'Mauris lacinia, lorem id dictum feugiat, felis diam egestas eros, et facilisis mauris nisi a enim. Pellentesque at ipsum congue.'
    },
  ];
  @Output() onFormValueChange = new EventEmitter<any>();
  //@ts-ignore
  formSubscription: Subscription = '';
  constructor(
    private _formBuilder: FormBuilder,
  ){

  }
  scrollToTop(){
       // console.log('scroll to top');
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
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
      name: ['', Validators.required],
      position: ['', Validators.required],
      text: ['', Validators.required],
      testimonials: new FormArray([]) ,
    });


  }
  initDefaultServices(){
    this.defaultTestimonials.forEach((value) => {
      this.itemsArray().push(this.service(value?.title, value?.position, value?.text));
    });
  }
  service(service = '', aboutDescription = '', text = ''){
    return  this._formBuilder.group({
      name: [service, Validators.required],
      position: [aboutDescription, Validators.required],
      text: [text, Validators.required],
    });
  }
  itemsArray() : FormArray {
    return this.form.get("testimonials") as FormArray
  }

  addItem(i: number =  this.editIndex){
    //@ts-ignore

    if (this.editIndex > -1){
      this.itemsArray().at(i).get('name')?.setValue( this.form.get('name')?.value);
      this.itemsArray().at(i).get('position')?.setValue( this.form.get('position')?.value);
      this.itemsArray().at(i).get('text')?.setValue( this.form.get('text')?.value);
    }
    else
    {
      this.itemsArray().push(this.service(
        this.form.get('name')?.value,
        this.form.get('position')?.value,
        this.form.get('text')?.value,
      ));
    }
    //@ts-ignore
    this.toggleItems();
  }

  toggleItems() {
    if (this.itemsSectionFlag){
      this.itemsSectionFlag = false;
      this.editIndex = -1;
      this.form.get('name')?.setValue('');
      this.form.get('position')?.setValue('');
      this.form.get('text')?.setValue('');
    }else
    {
      this.itemsSectionFlag = true;
    }
  }
  editItem(i: number){
    this.editIndex = i;
    this.form.get('name')?.setValue( this.itemsArray().at(i).get('name')?.value);
    this.form.get('position')?.setValue( this.itemsArray().at(i).get('position')?.value);
    this.form.get('text')?.setValue( this.itemsArray().at(i).get('text')?.value);
    this.toggleItems();
  }
  deleteItem(i: number){
    this.itemsArray().removeAt(i);
  }
  getServicesCount(){
    if (this.editIndex > -1){
      return this.editIndex + 1;
    }else {
      return this.itemsArray().length + 1;
    }
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
