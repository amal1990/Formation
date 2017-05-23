import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationFormComponent } from './formation-form/formation-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormationListComponent, FormationDetailsComponent, FormationFormComponent]
})
export class FormationModule { }
