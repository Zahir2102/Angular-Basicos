import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'SpiderMan',
    'IronMan',
    'Hawkeye',
    'Captain America',
    'Black Widow',
  ];
  heroeBorrado: string = '';

  borrarHeroe = () => {
    this.heroeBorrado = this.heroes.pop() || '';
  };
}
