import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home/patient-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient-home',
    pathMatch: 'full'
  },
  {
    path: 'patient-home',
    component: PatientHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
