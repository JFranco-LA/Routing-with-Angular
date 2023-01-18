import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products, productos } from '../productos/productos.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id!: number;
  isLoading: boolean = false;
  datos: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    setTimeout(() => { this.isLoading = true }, 700)
  }

  ngOnInit() {
    let dataRoute: any = this.route.snapshot.paramMap.get('id');
    this.id = dataRoute;
    console.log(this.id);

    if (this.productos.length < this.id - 1) {
      this.datos = true;
      if (this.datos) {
        this.router.navigate(['/products']);
      }
    }
  }

  productos: Products[] = productos




}
