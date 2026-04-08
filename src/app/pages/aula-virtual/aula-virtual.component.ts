import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-aula-virtual',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aula-virtual.component.html',
  styleUrl: './aula-virtual.component.scss'
})
export class AulaVirtualComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  cards = [
    {
      title: 'Cursos',
      description: 'Cursos Virtuales de Posgrado',
      image: '/assets/images/icon-cursos.png',
      link: 'https://aulavirtual.uabjb.edu.bo/posgrado/'
    },
    {
      title: 'Aulas Virtuales',
      description: 'Cursos Virtuales de Posgrado',
      image: '/assets/images/icon-aulas.png',
      link: 'https://aulavirtual.uabjb.edu.bo/posgrado/'
    },
    {
      title: 'Revista PosCientia',
      description: 'Revista Científica PosCientia, Vol. 3',
      image: '/assets/images/revista-posciencia.jpg',
      link: '#'
    },
    {
      title: 'Escuela de Posgrado',
      description: 'Visita nuestra página web de Posgrado',
      image: '/assets/images/icon-posgrado.png',
      link: '/'
    }
  ];

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
