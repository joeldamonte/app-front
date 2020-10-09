import { Component, OnInit } from '@angular/core';
import { DatoscarritoService } from 'src/app/service/datoscarrito.service';
import { Producto } from 'src/app/model/Producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  productos: Producto[] = []
  constructor(private service: DatoscarritoService,private actRou: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.actRou.parent.params.subscribe( params =>{
      console.log(params['id'])
      this.service.getProdCarrito(params['id']).subscribe( (datos:Producto[]) =>{
        console.log(datos)
        this.productos = datos
      })
    })
  }

  deleteCarrito = (id,index) =>{
    this.service.deleteProducto(id).subscribe( d => console.log(d))
  }

}
