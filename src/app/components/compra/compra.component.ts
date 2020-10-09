import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatoscarritoService } from '../../service/datoscarrito.service'
import { Producto } from 'src/app/model/Producto';
import { Carrito } from 'src/app/model/Carrito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  formul: FormGroup
  productos: Producto[]

  constructor(private fb: FormBuilder, private service: DatoscarritoService, private router: Router) {
      this.createForm()
   }

  ngOnInit(): void {
    this.service.getProductos().subscribe( (d: Producto[]) =>{
      this.productos = d
    })
  }

  createForm(){
    this.formul = this.fb.group({
      dni: ['', Validators.required],
      producto: ['', Validators.required],
    })
  }

  handlerSubmit(){
    console.log(this.formul.value)
    this.service.insertCarrito(this.formul.value.dni,this.formul.value.producto).subscribe( d =>{
      
    })
    this.router.navigate(['/'])
  }

}
