import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.css']
})
export class CarbrandsComponent implements OnInit {
  
  constructor(private pser:ProductService) { }
  resData;
  ngOnInit() 
  {
    this.pser.getProducts()
    .subscribe(res=>
      {
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
  }

}
