import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/contenidos';

  getProgramaDetalle(programaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/programa/${programaId}`);
  }
}
