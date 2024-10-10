import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nuevaTarea: string = '';
  listaTareas: string[] = [];

  constructor(private tareasService: TareasService) {}

  ionViewWillEnter() {
    this.obtenerTareas();
  }

  async agregarTarea() {
    if (this.nuevaTarea.trim().length > 0) {
      await this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.obtenerTareas();
    }
  }

  async obtenerTareas() {
    this.listaTareas = await this.tareasService.obtenerTareas();
  }
}
