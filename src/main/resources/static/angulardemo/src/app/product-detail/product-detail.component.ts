import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { AssertNotNull } from '@angular/compiler';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // products = products ;
  proid: any;

  constructor(private route: ActivatedRoute ) { }
  product:any;
  productId = this.route.snapshot.queryParams["productId"];
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.proid = params.get("productId")
        this.product = products[+this.proid];
    });
    }

}
