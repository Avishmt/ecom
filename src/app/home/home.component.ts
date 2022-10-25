import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) {}
  public featureProductList: any;
  public featureProductListMan: any;
  public featureProductListWoman: any;
  public featureProductListElectronics: any;
  public featureProductListJewelery: any;
  ngOnInit(): void {
    this.api.getproduct().subscribe((res) => {
      this.featureProductList = res;
      this.featureProductList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      this.featureProductList.reverse();
      console.log(this.featureProductList);
      this.featureProductListWoman = this.featureProductList.filter(
        (item: any) => {
          if (item.category == "women's clothing") {
            return item;
          }
        }
      );
      this.featureProductListMan = this.featureProductList.filter(
        (item: any) => {
          if (item.category == "men's clothing") {
            return item;
          }
        }
      );
      this.featureProductListElectronics = this.featureProductList.filter(
        (item: any) => {
          if (item.category == 'electronics') {
            return item;
          }
        }
      );
      this.featureProductListJewelery = this.featureProductList.filter(
        (item: any) => {
          if (item.category == 'jewelery') {
            return item;
          }
        }
      );

      console.log('woman', this.featureProductListWoman);
    });
  }

  // userData = sessionStorage.getItem('userSession');
}
