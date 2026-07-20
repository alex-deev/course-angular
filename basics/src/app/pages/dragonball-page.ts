import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dragonball',
  imports: [],
  template: `
    <div class="mt-6 p-4">
      <h1 class="text-2xl font-bold">Dragonball Super</h1>
      <hr class="my-3 border-t border-gray-300" />

      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg mb-2">Nuevo héroe</h3>
          <input
            class="border border-gray-300 rounded"
            type="text"
            placeholder="Nombre"
            maxlength="15"
            (change)="nuevoNombre.set($event.target.value)"
          />
          <div class="flex gap-2">
            <input
              class="border border-gray-300 rounded min-w-20 flex-1"
              type="number"
              placeholder="Poder"
              min="0"
              (input)="nuevoPoder.set($event.target.value)"
            />
            <p class="flex-none">poder {{ nivelPoder() }}</p>
          </div>
          <button class="bg-slate-300 p-1 rounded" type="button" (click)="agregarPersonaje()">
            Agregar
          </button>
        </div>

        <div class="flex flex-col">
          <h3 class="text-lg mb-2">Listado de heores</h3>

          <ul>
            @for (heroe of listado; track $index) {
              <li>
                ● <strong>{{ heroe.nombre }}</strong> -
                <span
                  [class.text-red-500]="heroe.poder < 1000"
                  [class.text-blue-500]="heroe.poder < 3000"
                  [class.text-green-500]="heroe.poder >= 3000"
                  >{{ heroe.poder }}
                </span>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class DragonballPage {
  nuevoNombre = signal('');
  nuevoPoder = signal('');
  nivelPoder = computed(() => {
    const nivel = Number(this.nuevoPoder()) || null;
    if (!nivel) return 'ninguno';
    if (nivel < 1000) return 'bajo';
    if (nivel < 3000) return 'medio';
    return 'alto';
  });

  listado = new Array<{ nombre: string; poder: number }>();

  agregarPersonaje() {
    if (this.nuevoNombre() && this.nuevoPoder()) {
      console.log(this.nuevoNombre(), this.nuevoPoder());

      this.listado.push({ nombre: this.nuevoNombre(), poder: Number(this.nuevoPoder()) });
    }
  }
}
