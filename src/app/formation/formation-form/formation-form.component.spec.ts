import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { FormationRoutingModule } from './../formation-routing.module';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormComponent } from './formation-form.component';

describe('FormationFormComponent', () => {
  let component: FormationFormComponent;
  let fixture: ComponentFixture<FormationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormationFormComponent,
        CommonModule,
        FormationRoutingModule,
        SharedModule,
        ReactiveFormsModule
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
