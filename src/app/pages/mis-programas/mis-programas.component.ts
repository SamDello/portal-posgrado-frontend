import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramaService } from '../../core/services/programa.service';

@Component({
  selector: 'app-mis-programas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-programas.component.html',
  styleUrl: './mis-programas.component.scss'
})
export class MisProgramasComponent {
  private programaService = inject(ProgramaService);

  programas: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor() {
    this.loadMisProgramas();
  }

  loadMisProgramas(): void {
    this.programaService.getMisProgramas().subscribe({
      next: (response) => {
        this.programas = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudieron cargar tus programas';
      }
    });
  }
}
