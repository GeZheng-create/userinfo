import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  product:any;

  constructor(  private router: Router,  private route: ActivatedRoute,
    ) { }

    ngOnInit() :void{
    }

  share() {
    window.alert('The product has been shared!');
  }

navigate(){
  this.router.navigate(["/product"]);
}

}
