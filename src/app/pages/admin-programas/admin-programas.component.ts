import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Programa, ProgramaService } from '../../core/services/programa.service';

@Component({
  selector: 'app-admin-programas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-programas.component.html',
  styleUrl: './admin-programas.component.scss'
})
export class AdminProgramasComponent {
  private programaService = inject(ProgramaService);

  programas: Programa[] = [];
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  editingId: number | null = null;

  form = {
    nombre: '',
    descripcion: '',
    modalidad: '',
    duracion: '',
    activo: true
  };

  constructor() {
    this.loadProgramas();
  }

  loadProgramas(): void {
    this.programaService.getAllProgramasAdmin().subscribe({
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

  resetForm(): void {
    this.editingId = null;
    this.form = {
      nombre: '',
      descripcion: '',
      modalidad: '',
      duracion: '',
      activo: true
    };
  }

  savePrograma(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.form.nombre || !this.form.descripcion || !this.form.modalidad || !this.form.duracion) {
      this.errorMessage = 'Completa todos los campos del programa';
      return;
    }

    if (this.editingId) {
      this.programaService.updatePrograma(this.editingId, this.form).subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.resetForm();
          this.loadProgramas();
        },
        error: (error) => {
          this.errorMessage =
            error?.error?.message || 'No se pudo actualizar el programa';
        }
      });
      return;
    }

    this.programaService.createPrograma(this.form).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.resetForm();
        this.loadProgramas();
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'No se pudo crear el programa';
      }
    });
  }

  editPrograma(programa: Programa): void {
    this.editingId = programa.id;
    this.form = {
      nombre: programa.nombre,
      descripcion: programa.descripcion,
      modalidad: programa.modalidad,
      duracion: programa.duracion,
      activo: programa.activo ?? true
    };
  }

  deletePrograma(id: number): void {
    this.errorMessage = '';
    this.successMessage = '';

    this.programaService.deletePrograma(id).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.loadProgramas();
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'No se pudo desactivar el programa';
      }
    });
  }
}
