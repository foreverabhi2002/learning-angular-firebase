import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public products;

  constructor(public apiService: ApiService) {
    this.getData();
  }

  async getData() {
    this.products = await this.apiService.getProducts();
    console.log(this.products);
  }
}
