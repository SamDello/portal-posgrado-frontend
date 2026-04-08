import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdmisionesComponent } from './pages/admisiones/admisiones.component';
import { BecasComponent } from './pages/becas/becas.component';
import { GradoComponent } from './pages/grado/grado.component';
import { PosgradoComponent } from './pages/posgrado/posgrado.component';
import { UniversidadComponent } from './pages/universidad/universidad.component';
import { InternacionalComponent } from './pages/internacional/internacional.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { AulaVirtualComponent } from './pages/aula-virtual/aula-virtual.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProgramasComponent } from './pages/programas/programas.component';
import { MisProgramasComponent } from './pages/mis-programas/mis-programas.component';
import { AdminProgramasComponent } from './pages/admin-programas/admin-programas.component';
import { adminGuard } from './core/guards/admin.guard';
import { AdminInscripcionesComponent } from './pages/admin-inscripciones/admin-inscripciones.component';
import { ProgramaDetalleComponent } from './pages/programa-detalle/programa-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admisiones', component: AdmisionesComponent },
  { path: 'becas', component: BecasComponent },
  { path: 'grado', component: GradoComponent },
  { path: 'posgrado', component: PosgradoComponent },
  { path: 'universidad', component: UniversidadComponent },
  { path: 'internacional', component: InternacionalComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'programas', component: ProgramasComponent, canActivate: [authGuard] },
  { path: 'mis-programas', component: MisProgramasComponent, canActivate: [authGuard] },
  { path: 'aula-virtual', component: AulaVirtualComponent, canActivate: [authGuard] },
  { path: 'admin/inscripciones', component: AdminInscripcionesComponent, canActivate: [adminGuard] },
  { path: 'mis-programas/:id', component: ProgramaDetalleComponent, canActivate: [authGuard] },
  { path: 'admin/programas', component: AdminProgramasComponent, canActivate: [adminGuard] },
  { path: '**', redirectTo: '' }
];
