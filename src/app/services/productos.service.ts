import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/productos.interface';
import { ProductosInfo } from '../interfaces/productos-info.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosIdx: ProductosIdx[] = [];
  productosFiltrado: ProductosIdx[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( ( resolve, reject) => {
      this.http.get('https://angular-html-2bb76.firebaseio.com/productos_idx.json').subscribe((resp: ProductosIdx[]) => {
        this.productosIdx = resp;
        this.cargando = false;
      });
    } );
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-2bb76.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {

    if (this.productosIdx.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos( termino: string) {
    this.productosFiltrado = this.productosIdx.filter( producto => {
      return true;
    });
  }
}
