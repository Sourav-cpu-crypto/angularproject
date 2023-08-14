import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  formData: any[] = [{ field1: '', field2: '' }];

  addRow() {
    this.formData.push({ field1: '', field2: '' });
  }

  submitForm() {
    console.log('Form data:', this.formData);
  }

}
