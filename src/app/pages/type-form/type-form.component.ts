import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BackendApiService} from '../../_services/backend-api.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss']
})
export class TypeFormComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private backendApiService: BackendApiService
  ) {}
  email= '';
  getRequestInProgress =false;
  formGroup: FormGroup = this._formBuilder.group({
    firstCtrl: [''],
    secondCtrl: [''],
    secondthirdCtrl: [''],
    thirdCtrl: [''],
    fourthCtrl: [''],
    fifthCtrl: [''],
    sixthCtrl: [''],
  });

  dummyText(){
    return 'Vestibulum sed hendrerit diam. Pellentesque vestibulum massa dui, in aliquam quam pharetra at. Curabitur ultricies auctor turpis, vitae suscipit turpis aliquam sit amet. Etiam nec sagittis velit. Ut laoreet eros vitae tincidunt mollis. Pellentesque non ultrices ipsum odio interdum.\n' +
      '  \n' +
      '  Cras sed turpis iaculis, sodales dolor vitae, iaculis lorem. Duis consectetur quam auctor venenatis in purus. Nulla vel semper erat. Sed non tempus nisl.\n' +
      '  \n' +
      '  '
  }
  ngOnInit(): void {
  }
  setFormValue(firstCtrlName: any, value: any){
    this.formGroup.get(firstCtrlName)?.setValue(value);
  }
  save(stepper: any){

    const from = this.formGroup.getRawValue();
    console.log('form', from);
    const skills = from?.firstCtrl?.skills?.length ? JSON.stringify(from?.firstCtrl?.skills) : (JSON.stringify([{name:'Web Designer'}]));
    const data = {
      email: this.email,
      name:  from?.firstCtrl?.name ? from.firstCtrl.name :  'I\'M MARY SMITH',
      skills: skills,

      about: from?.secondCtrl?.about ? from.secondCtrl.name :  'About',
      aboutSectionContent: from?.secondthirdCtrl?.aboutSectionContent ? from.secondthirdCtrl.aboutSectionContent :  this.dummyText(),
      introduceMyself: from?.secondCtrl?.introduceMyself ? from.secondCtrl.introduceMyself :  'LET ME INTRODUCE MYSELF',

      serviceTitle: from?.thirdCtrl?.title ? from.thirdCtrl.title :  'Services',
      serviceDescription: from?.thirdCtrl?.description ? from.thirdCtrl.description :  'Services I Offer',
      services: JSON.stringify(from?.thirdCtrl?.services),

      testimonialTitle: from?.fourthCtrl?.title ? from.thirdCtrl.title :  'Testimonials',
      testimonialDescription: from?.fourthCtrl?.description ? from.thirdCtrl.description :  'Words from my happy clients',
      testimonials: JSON.stringify(from?.fourthCtrl?.testimonials),

      contactSectionTitle: from?.fifthCtrl?.title ? from.fifthCtrl.title :  'Get In Touch',
      contactSectionDescription: from?.fifthCtrl?.description ? from.fifthCtrl.description :  'Let\'s Discuss How Can I Help you with your project',

      contactSectionAddress: from?.sixthCtrl?.address ? from.sixthCtrl.address :  '1628 Union Street, San Francisco, CA 94123 ',
      contactSectionPhone:from?.sixthCtrl?.phone ? from.sixthCtrl.phone :  '(949) 723 3012 ',
      contactSectionWebsite: from?.sixthCtrl?.website ? from.sixthCtrl.website :  'www.sitename.com',
      contactSectionEmail: from?.sixthCtrl?.email ? from.sixthCtrl.email :  'email@sitename.com',
    };
    console.log('data', data);
    this.getRequestInProgress = true;
    this.backendApiService.postApi(`save/data`, data)
      .pipe(
        finalize(() => {
          this.getRequestInProgress = false;
        })
      )
      .subscribe((response: any) => {
        stepper.selectedIndex = 0;
        this._snackBar.open('Request has been processed', 'OK');
      });
  }
}
