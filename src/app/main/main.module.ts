import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskDashboardComponent } from '../task-dashboard/task-dashboard.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { AuthGuard } from '../auth/auth.guard';
import { MaterailModuleModule } from '../MDdesign/materail-module.module';

const routes: Routes = [
  { path: 'dashboard', component: TaskDashboardComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskDashboardComponent, canActivate: [AuthGuard] },
  { path: 'newtask', component: TaskFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    MaterailModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
