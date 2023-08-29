import { Subscription } from 'rxjs';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-writing-samples',
  templateUrl: './writing-samples.component.html',
  styleUrls: ['./writing-samples.component.scss'],
})
export class WritingSamplesComponent implements OnInit,OnDestroy {
  form: FormGroup = this.initForms();
  fileName = '';
  showUploadButton: boolean = true;
  @Output() onFormValueChange = new EventEmitter<any>();
  formSubscription: Subscription = new Subscription();
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {this.initForValueChangesSubscription()}
  scrollToTop() {
    // console.log('scroll to top');
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
  initForms() {
    return this._formBuilder.group({
      writingSamples: ['', Validators.required],
    });
  }
  deleteAction() {
    console.log('deleteAction Pressed');
    this.form.get('writingSamples')?.setValue('');
    this.showUploadButton = true;
  }

  onFileChanged(event: any, name: any) {
    const files = event?.target?.files;
    if (files.length === 0) {
      return;
    }
    const file: File = files[0];

    // Check file size
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      // Display an error message for file size exceeding the limit
      this._snackBar.open('File size exceeds 10MB limit', 'OK');
      console.log('File size exceeds 10MB limit');
      return;
    }

    const mimeType = file.type;
    console.log(mimeType);

    if (!mimeType.match(/pdf|doc/)) {
      // Display an error message or handle the case for unsupported file types
      this._snackBar.open('File supports only Pdf or Word', 'OK');
      console.log('error!!!');
      return;
    }

    if (file) {
      this.fileName = file.name;
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        const binaryString = _event?.target?.result;
        const fileData = binaryString;
        this.form.get(name)?.setValue(fileData);
        
      };
     
      this.showUploadButton = false;
    }
  }
  initForValueChangesSubscription(){
    this.formSubscription = this.form.valueChanges.subscribe((value)=>{
      console.log('valueChanges', value);
      this.onFormValueChange.emit(value);
     
    });
  }
  downloadFile() {
    if (!this.showUploadButton) {
      const fileData = this.form.get('writingSamples')?.value;
      const a = document.createElement('a');
      a.href = fileData;
      a.download = this.fileName; // Set the file name
      a.click();
    }
  }
}
