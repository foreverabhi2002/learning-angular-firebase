import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  product_id;
  product;
  products;

  cartProducts = [];
  getCartProducts;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) {
    // get product with id
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.product_id = id;
      // console.log(id + "id");
      // this.productId.emit('id');
      this.apiService.getProduct(id).then((product: any) => {
        this.product = product;
      });
    });

    // get all products
    this.apiService.getProducts().then((product) => {
      this.products = product;
    });
  }

  public productToCart(product) {
    this.cartProducts.push(product);

    // set cart data in local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));

    // get cart data
    this.getCartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(this.getCartProducts);
  }
}
