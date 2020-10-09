import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment}  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DatoscarritoService {

  constructor(private http: HttpClient) { }

  getProductos = () => this.http.get(`${environment.URL}findAllProd`)

  deleteProducto = (id: number) => this.http.delete(`${environment.URL}deleteProd/${id}`)

  getCarritos = () => this.http.post(`${environment.URL}findAllCarritos`,{})

  getProdCarrito = (idCar: number) => this.http.get(`${environment.URL}findProdCarr/${idCar}`)

  insertCarrito = (dni: string,idProd: string) => this.http.post(`${environment.URL}insertCarrito/${dni}/${idProd}`,{})

  deleteCarrito = (idC: number) => this.http.delete(`${environment.URL}deleteCarrito/${idC}`)

  insertProdCarr = (idProd: number) => this.http.post(`${environment.URL}insertProdCarr/${idProd}`,{})

  pagarCarrito = (idCarr: number) => this.http.post(`${environment.URL}pagarCarrito/${idCarr}`,{})
}
