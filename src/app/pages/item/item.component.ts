import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductosInfo } from '../../interfaces/productos-info.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productosInfo: ProductosInfo;
  idProducto: string;

  constructor( private route: ActivatedRoute,
              public _productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {

      this.idProducto = parametros['id'];
      this._productosService.getProducto(this.idProducto).subscribe((resp: ProductosInfo) => {
        this.productosInfo = resp;
      });
    });
  }

}
