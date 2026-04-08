import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.getUser();

  cards = [
    {
      title: 'Mi Perfil',
      description: 'Consulta tus datos personales y académicos.',
      route: '/profile',
      icon: 'bi-person-circle'
    },
    {
      title: 'Programas',
      description: 'Explora la oferta académica disponible.',
      route: '/programas',
      icon: 'bi-journal-richtext'
    },
    {
      title: 'Mis Programas',
      description: 'Revisa los programas a los que estás inscrito.',
      route: '/mis-programas',
      icon: 'bi-folder-check'
    },
    {
      title: 'Aula Virtual',
      description: 'Accede a los recursos y actividades de la plataforma.',
      route: '/aula-virtual',
      icon: 'bi-mortarboard-fill'
    },
    {
      title: 'Cerrar Sesión',
      description: 'Finaliza tu sesión actual de forma segura.',
      route: '',
      icon: 'bi-box-arrow-right',
      logout: true
    }
  ];

  constructor() {
    if (this.user?.rol === 'admin') {
      this.cards.splice(4, 0,
        {
          title: 'Administrar Programas',
          description: 'Crea, edita y desactiva programas académicos.',
          route: '/admin/programas',
          icon: 'bi-gear-fill'
        },
        {
          title: 'Administrar Inscripciones',
          description: 'Aprueba o rechaza inscripciones de estudiantes.',
          route: '/admin/inscripciones',
          icon: 'bi-list-check'
        }
      );
    }
  }

  handleCard(card: any): void {
    if (card.logout) {
      this.authService.logout();
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate([card.route]);
  }
}
