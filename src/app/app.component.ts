import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data;
  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  constructor(public apiService: ApiService) {
    this.apiService.getAllData().then((data) => {
      console.log(data);
      this.data = data;
    });
  }

  // public async onSubmit() {
  //   console.log(this.form.value);
  //   this.apiService.createData(this.form.value).then(() => {
  //     window.location.reload();
  //   });
  // }

  public get name(): AbstractControl {
    return this.form.controls['name'];
  }

  public get email(): AbstractControl {
    return this.form.controls['email'];
  }
}
