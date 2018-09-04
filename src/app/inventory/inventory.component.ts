import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../node_modules/rxjs';
import {InventoryService} from '../inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public products = []; 

  constructor(public InventoryService: InventoryService) { }

  ngOnInit() {

    this.getProduct();
    console.log("array",this.products);


    
  }

  getProduct(){
    this.InventoryService.getProducts().subscribe(response => {
      this.products = response;

      console.log(this.products);

    })
  }
  

}
