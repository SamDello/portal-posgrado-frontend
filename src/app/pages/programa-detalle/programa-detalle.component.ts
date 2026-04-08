import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContenidoService } from '../../core/services/contenido.service';

@Component({
  selector: 'app-programa-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programa-detalle.component.html',
  styleUrl: './programa-detalle.component.scss'
})
export class ProgramaDetalleComponent {
  private route = inject(ActivatedRoute);
  private contenidoService = inject(ContenidoService);

  isLoading = true;
  errorMessage = '';
  programa: any = null;
  modulos: any[] = [];

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPrograma(id);
  }

  loadPrograma(id: number): void {
    this.contenidoService.getProgramaDetalle(id).subscribe({
      next: (response) => {
        this.programa = response.programa;
        this.modulos = response.modulos;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudo cargar el contenido del programa';
      }
    });
  }
}
