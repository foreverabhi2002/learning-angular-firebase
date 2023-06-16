import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(public apiService: ApiService) {}

  public async submit() {
    if (this.form.invalid) {
      alert('form is invalid');
      return;
    }

    console.log(this.form.value);
    this.apiService
      .addProduct(this.form.value)
      .then(() => {
        console.log('data successfully added');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public get name(): AbstractControl {
    return this.form.controls['name'];
  }
  public get description(): AbstractControl {
    return this.form.controls['description'];
  }
  public get price(): AbstractControl {
    return this.form.controls['price'];
  }
}
