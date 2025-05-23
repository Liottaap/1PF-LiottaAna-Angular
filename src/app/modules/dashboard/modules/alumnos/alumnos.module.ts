import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import {MatTableModule} from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms'


import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { DetalleAlumnoComponent } from './pages/detalle-alumno/detalle-alumno.component';

@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosTableComponent,
    DetalleAlumnoComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [AlumnosComponent],
})
export class AlumnosModule { }
