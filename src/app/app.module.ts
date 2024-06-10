import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterailModuleModule } from './MDdesign/materail-module.module';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { taskReducer } from './store/reducers/task.reducer';
import { userReducer } from './store/reducers/user.reducer';
import { TaskEffects } from './store/effects/task.effects';
import { UserEffects } from './store/effects/user.effects';
import { environment } from '../environments/environment';  // Add this import


@NgModule({
  declarations: [
    AppComponent,
    TaskDashboardComponent,
    TaskFormComponent,
    TaskFormComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterailModuleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ tasks: taskReducer, users: userReducer }),
    EffectsModule.forRoot([TaskEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
