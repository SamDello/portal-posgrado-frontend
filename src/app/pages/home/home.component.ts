import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { ProgramCardComponent } from '../../shared/components/program-card/program-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, ProgramCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  programs = [
    {
      title: 'Maestrías',
      description: 'Programas de formación avanzada con enfoque profesional y académico.',
      icon: 'bi-mortarboard-fill'
    },
    {
      title: 'Diplomados',
      description: 'Especializaciones cortas para fortalecer competencias específicas.',
      icon: 'bi-journal-richtext'
    },
    {
      title: 'Cursos',
      description: 'Actualización continua para profesionales en distintas áreas.',
      icon: 'bi-laptop'
    }
  ];

  news = [
    {
      title: 'Convocatoria abierta 2025',
      text: 'Ya están abiertas las inscripciones para programas de posgrado.'
    },
    {
      title: 'Nuevos convenios internacionales',
      text: 'Se amplían las oportunidades de movilidad académica.'
    },
    {
      title: 'Seminario de innovación',
      text: 'Participa en eventos con expertos nacionales e internacionales.'
    }
  ];
}
