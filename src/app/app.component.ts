import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filterTerm: string;

  formData = [];
  title = 'Forms';
  buttonName = 'Edit';
  editMode = false;
  @ViewChild('f') Forms: NgForm;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
    selected: '',
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.Forms.value.selected = false;
    this.formData.push(this.Forms.value);
    console.log(this.formData);

    this.Forms.reset();
  }
  toggleEdit() {
    this.editMode = !this.editMode;
    this.buttonName = this.editMode ? 'Save' : 'Edit';
  }
  delete() {
    this.formData = this.formData.filter((value) => {
      //console.log(value)
      return value.selected === false;
    });
    console.log(this.formData);
  }
}
