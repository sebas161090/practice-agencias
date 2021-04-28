import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AgenciasService {
  url = 'http://localhost:3000';
  listado: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/agencias')
    .pipe(
      map((response:Response)=>response)
      );
  }


  findbyId(id:number) {

    this.listado = JSON.parse(localStorage.getItem('agencias'));
    const found = this.listado.find(element => element.id == id);
    console.log(found);
    return found;


  }


  findIndexbyId(id:number) {

    this.listado = JSON.parse(localStorage.getItem('agencias'));
    const found = this.listado.findIndex(element => element.id == id);
    console.log(found);
    return found;


  }


}
