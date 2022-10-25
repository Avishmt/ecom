import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productList: any;
  searchKey: string = '';
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getproduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
