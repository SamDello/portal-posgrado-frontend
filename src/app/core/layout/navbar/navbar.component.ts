import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  dropdowns = {
    admisiones: false,
    becas: false,
    grado: false,
    posgrado: false,
    universidad: false,
    internacional: false,
    estudiantes: false
  };

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown(menu: keyof typeof this.dropdowns) {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  closeAllDropdowns() {
    Object.keys(this.dropdowns).forEach((key) => {
      this.dropdowns[key as keyof typeof this.dropdowns] = false;
    });
  }
}
