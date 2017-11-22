import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {
  public tituloPagina = 'Catálogo de Productos';

  constructor() {}

  ngOnInit() {  }

  tarjetas: Object[] = [
    { titulo: 'Tarjeta 1', descripcion: 'Esto eslo que debe mostrarse én mi tarjeta 1', imagen: './assets/images/zapato1.jpg', actualizacion: 'Last updated 3 mins ago' },
    { titulo: 'Tarjeta 1', descripcion: 'Esto eslo que debe mostrarse én mi tarjeta 2', imagen: './assets/images/zapato2.jpg', actualizacion: 'Last updated 4 mins ago' },
    { titulo: 'Tarjeta 1', descripcion: 'Esto eslo que debe mostrarse én mi tarjeta 3', imagen: './assets/images/zapato3.jpg', actualizacion: 'Last updated 5 mins ago' },
    { titulo: 'Tarjeta 1', descripcion: 'Esto eslo que debe mostrarse én mi tarjeta 4', imagen: './assets/images/zapato4.jpg', actualizacion: 'Last updated 6 mins ago' },
    { titulo: 'Tarjeta 1', descripcion: 'Esto eslo que debe mostrarse én mi tarjeta 5', imagen: './assets/images/zapato5.jpg', actualizacion: 'Last updated 7 mins ago' }
  ]
}
