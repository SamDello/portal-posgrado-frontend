import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.scss'
})
export class ProgramCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = 'bi-mortarboard';
}
