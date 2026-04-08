import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  hideLayout = false;

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideLayout =
          this.router.url.startsWith('/aula-virtual') ||
          this.router.url.startsWith('/login') ||
          this.router.url.startsWith('/register') ||
          this.router.url.startsWith('/dashboard') ||
          this.router.url.startsWith('/profile') ||
          this.router.url.startsWith('/programas') ||
          this.router.url.startsWith('/mis-programas') ||
          this.router.url.startsWith('/admin');
      });

    this.hideLayout =
      this.router.url.startsWith('/aula-virtual') ||
      this.router.url.startsWith('/login') ||
      this.router.url.startsWith('/register') ||
      this.router.url.startsWith('/dashboard') ||
      this.router.url.startsWith('/profile') ||
      this.router.url.startsWith('/programas') ||
      this.router.url.startsWith('/mis-programas') ||
      this.router.url.startsWith('/admin');
  }
}
