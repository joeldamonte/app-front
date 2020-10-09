import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../model/Carrito'
import { DatoscarritoService } from 'src/app/service/datoscarrito.service';
import { Producto } from 'src/app/model/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCarritos: Carrito[] = []
  constructor(private service: DatoscarritoService, private router: Router) { 

  }

  ngOnInit(): void {
    this.service.getCarritos().subscribe( (datos: Carrito[]) =>{
       console.log(datos)
      this.arrCarritos = datos
    }) 
    }


    showProd = (id: number) =>{
      this.router.navigate(['/productos',id])
    }


    pagarCarrito(idCarr: number){
        this.service.pagarCarrito(idCarr).subscribe( d =>{
          console.log(d)
        })
    }

  deleteCarrito(idCarr: number, index: number){
    this.arrCarritos.splice(index,1)
    this.service.deleteCarrito(idCarr).subscribe( d =>{
      console.log(d)
    })
  }
}
