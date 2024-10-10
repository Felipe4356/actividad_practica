import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async agregarTarea(tarea: string) {
    const tareas = await this.obtenerTareas();
    tareas.push(tarea);
    await this.storage.set('tareas', tareas);
  }

  async obtenerTareas(): Promise<string[]> {
    return (await this.storage.get('tareas')) || [];
  }
}
