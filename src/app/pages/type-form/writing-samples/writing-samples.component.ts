import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-writing-samples',
  templateUrl: './writing-samples.component.html',
  styleUrls: ['./writing-samples.component.scss']
})
export class WritingSamplesComponent {
  form: FormGroup = this.initForms();
  fileName = '';

  constructor(
    private _formBuilder: FormBuilder,
  ){

  }

  ngOnInit(): void {
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
      writingSamples: ['', Validators.required],
    });


  }
  onFileChanged(event: any, name: any) {
    const files = event?.target?.files;
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    console.log(mimeType);
    if (mimeType.match(/image\/*/) == null) {
      // this.snackBar.open('Please select a valid image', 'OK');
      return;
    }

    const file: File = files[0];
    if (files && file) {
      this.fileName = file.name;
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        const binaryString = _event?.target?.result;
        const img = (binaryString);
        this.form.get(name)?.setValue(img);
      };
    }
  }
}
