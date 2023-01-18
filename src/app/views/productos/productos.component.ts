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

export const productos: Products[] = [
  { cod: 1, description: 'Galletas chokis', price_purchase: 50, price_sale: 68, stock: 5, image: 'http://www.gamesacookies.com/sites/gamesa.com/files/2021-09/chokis-individual.png' },
  { cod: 3, description: 'Mermelada de fresa', price_purchase: 60, price_sale: 75, stock: 10, image: 'https://res.cloudinary.com/riqra/image/upload/v1650676856/sellers/a-1/products/mqfsihysbqdqy8xygea1.png' },
  { cod: 4, description: 'Aceite', price_purchase: 50, price_sale: 60, stock: 20, image: 'https://res.cloudinary.com/riqra/image/upload/w_656,h_656,c_limit,q_auto,f_auto/v1649283499/sellers/10/qlczdhfwo711ep9pcsle.png' },
  { cod: 6, description: 'Palomitas de maiz', price_purchase: 100, price_sale: 105, stock: 15, image: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/1598.png' },
  { cod: 9, description: 'Doritos', price_purchase: 30, price_sale: 50, stock: 22, image: 'https://doritos.es/images/default-source/productos/doritos-tex-mex-600x568_3d_new.png' },
  { cod: 15, description: 'Batimix', price_purchase: 20, price_sale: 25, stock: 49, image: 'https://mmkfoods.pe/wp-content/uploads/2020/08/20200715_133746.png' },
];


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Products[] = productos;

  constructor(private router: Router) { }

  


  visualizarProducto(id: number) {
    this.router.navigate([`/product/${id}`]);

  }
}
