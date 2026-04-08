import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Programa {
  id: number;
  nombre: string;
  descripcion: string;
  modalidad: string;
  duracion: string;
  activo?: boolean;
  created_at?: string;
}

export interface ProgramaPayload {
  nombre: string;
  descripcion: string;
  modalidad: string;
  duracion: string;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/programas';

  getProgramas(): Observable<Programa[]> {
    return this.http.get<Programa[]>(this.apiUrl);
  }

  inscribirse(programa_id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscribirse`, { programa_id });
  }

  getMisProgramas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mis-programas`);
  }

  getAllProgramasAdmin(): Observable<Programa[]> {
    return this.http.get<Programa[]>(`${this.apiUrl}/admin`);
  }

  createPrograma(data: ProgramaPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin`, data);
  }

  updatePrograma(id: number, data: ProgramaPayload): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/${id}`, data);
  }

  deletePrograma(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/${id}`);
  }

  getInscripcionesAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/inscripciones`);
  }

  updateEstadoInscripcion(id: number, estado: 'pendiente' | 'aprobado' | 'rechazado'): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/inscripciones/${id}`, { estado });
  }
}
