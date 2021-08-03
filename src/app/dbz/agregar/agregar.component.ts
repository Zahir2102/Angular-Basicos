import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaze';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private DbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;
    if (this.nuevo.poder <= 0) return;

    this.DbzService.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
