import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>La base es: {{ base }}</h3>
    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ numero }}</span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  base: number = 5;
  numero: number = 0;

  acumular = (valor: number) => (this.numero += valor);
}
