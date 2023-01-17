import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Products {
  cod: number;
  description: string;
  price_purchase: number;
  price_sale: number;
  stock: number;
  image: string;
}



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private router: Router){}
  productos: Products[] = [
    { cod: 1, description: 'Galletas chokis', price_purchase: 50, price_sale: 68, stock: 5, image: '' },
    { cod: 3, description: 'Mermelada de fresa', price_purchase: 60, price_sale: 75, stock: 10, image: '' },
    { cod: 4, description: 'Aceite', price_purchase: 50, price_sale: 60, stock: 20, image: '' },
    { cod: 6, description: 'Palomitas de maiz', price_purchase: 100, price_sale: 105, stock: 15, image: '' },
    { cod: 9, description: 'Doritos', price_purchase: 30, price_sale: 50, stock: 22, image: '' },
    { cod: 15, description: 'Batimix', price_purchase: 20, price_sale: 25, stock: 49, image: '' },
  ];

  visualizarProducto(id: number){
    this.router.navigate([`/product/${id}`]);
    
  }
}
