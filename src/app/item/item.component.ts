import { Component, OnInit } from '@angular/core';
import { AgenciasService } from '../core/app.agencias.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  listado: any;
  constructor(

    private agenciasService: AgenciasService,
    private route: ActivatedRoute,
    private router: Router,

  ) {


  }

  ngOnInit() {
    if (localStorage.getItem("agencias")) {

        this.listado = JSON.parse(localStorage.getItem('agencias'));

    } else {
      this.agenciasService.getAll().subscribe(result => {
        this.listado = result;
        localStorage.setItem('agencias', JSON.stringify(this.listado));

      });


    }





  }


  editar(id2: number) {
   // this.router.navigate(['../item-detail/', { id: id2 }]);
    this.router.navigate(['/item-detail', id2]);

  }

}
