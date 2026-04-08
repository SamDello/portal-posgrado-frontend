import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Programa, ProgramaService } from '../../core/services/programa.service';

@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.scss'
})
export class ProgramasComponent {
  private programaService = inject(ProgramaService);

  programas: Programa[] = [];
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  constructor() {
    this.loadProgramas();
  }

  loadProgramas(): void {
    this.programaService.getProgramas().subscribe({
      next: (response) => {
        this.programas = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudieron cargar los programas';
      }
    });
  }

  inscribirse(programaId: number): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.programaService.inscribirse(programaId).subscribe({
      next: (response) => {
        this.successMessage = response.message;
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'No se pudo realizar la inscripción';
      }
    });
  }
}
