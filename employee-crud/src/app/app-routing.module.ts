import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AboutComponent } from './pages/about/about.component';
import { EditOrRemoveComponent } from './pages/edit-or-remove/edit-or-remove.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'employees',
    component: AllUsersComponent
  },
  {
    path: 'user/:userId',
    component: UserProfileComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'edit/:id',
    component: EditOrRemoveComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
