import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/model/Producto';
import { DatoscarritoService } from 'src/app/service/datoscarrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agreg-prod-carr',
  templateUrl: './agreg-prod-carr.component.html',
  styleUrls: ['./agreg-prod-carr.component.css']
})
export class AgregProdCarrComponent implements OnInit {

  formul: FormGroup
  productos: Producto[]

  constructor(private fb: FormBuilder, private service: DatoscarritoService,private actRou: ActivatedRoute) {
    this.createForm()
   }

  ngOnInit(): void {
    this.actRou.parent.params.subscribe( params =>{
      console.log(params)
      this.service.getProductos().subscribe( (datos:Producto[]) =>{
        console.log(datos)
        this.productos = datos
      })
    })
  }

  createForm(){
    this.formul = this.fb.group({
      producto: ['', Validators.required]
    })
  }

  handlerSubmit(){
    
  }
}
