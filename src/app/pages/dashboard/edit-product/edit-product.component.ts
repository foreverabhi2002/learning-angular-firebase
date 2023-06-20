import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public productId;
  public productData;

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(public route: ActivatedRoute, public apiService: ApiService) {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
      this.apiService.getProduct(this.productId).then((product) => {
        this.productData = product;
        console.log(this.productData);
      });
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
