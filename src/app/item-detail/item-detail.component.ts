import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciasService } from '../core/app.agencias.service';
import { Agencia } from '../common/domain/agencias'
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  agenciasForm: FormGroup;
  listado: any;
  objAgencia: Agencia;
  index: Number;

  constructor(
    private agenciasService: AgenciasService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) {


   }

  ngOnInit() {

    this.getItemDetaiById();

    this.agenciasForm =  this.formBuilder.group({
      id : [this.objAgencia.id],
      agencia: [this.objAgencia.agencia],
      direccion: [this.objAgencia.direction],
      distrito: [this.objAgencia.distrito],
      lat: [this.objAgencia.latitud],
      lon: [this.objAgencia.longitud],

    });

  }


  getItemDetaiById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listado = JSON.parse(localStorage.getItem('agencias'));
    var tempAgencia = this.agenciasService.findbyId(id);
    debugger;
    this.index = this.agenciasService.findIndexbyId(id);
    this.objAgencia = new Agencia();
    console.log(this.listado);

    this.objAgencia.id = tempAgencia.id;
    this.objAgencia.agencia = tempAgencia.agencia;
    this.objAgencia.distrito = tempAgencia.distrito;
    this.objAgencia.provincia = tempAgencia.provincia;
    this.objAgencia.departamento = tempAgencia.departamento;
    this.objAgencia.direction = tempAgencia.direccion;
    this.objAgencia.latitud = tempAgencia.lat;
    this.objAgencia.longitud = tempAgencia.lon;
    this.objAgencia.img = tempAgencia.img;
    /*
      tempAgencia.id, tempAgencia.agencia, tempAgencia.distrito, tempAgencia.provincia,
      tempAgencia.departamento, tempAgencia.direccion, tempAgencia.lat,tempAgencia.lon, tempAgencia.img);

  */




  }


  editar(){

    //console.log(this.agenciasForm.value);
    this.listado.splice(this.index, 1, this.agenciasForm.value);
    console.log(this.listado);
    localStorage.setItem('agencias', JSON.stringify(this.listado));
    this.router.navigate(['/item']);


  }




}
