import { FormationDetailsComponent } from './../formation-details/formation-details.component';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Formation } from 'app/shared/models/formation';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {

  id: any;
  formations: Formation[];
  formation: Formation;
  sub: Array<Subscription> = [];
  formationFormRx: FormGroup;
  constructor(private formationService: FormationService,
    private route: ActivatedRoute, private builder: FormBuilder) {

    const sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('id', this.id);
    });

  }
  ngOnInit() {
    if (this.id) {
      this.find(this.id);
    }
    this.formation = new Formation();
    this.formation.title = 'Hello !!!';
    this.formation.description = 'blablablablabla';
    this.formationFormRx = this.builder.group({
      title: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*')]),
      description: new FormControl('')
    });
  }

  add(form: NgForm) {
    console.log('Added data', form.value);
    const title = form.value.title;
    const description = form.value.description;
    const model: Formation = new Formation();
    model.title = title;
    model.description = description;

    if (this.id) {
      model.id = this.id;
      console.log('fff', model);
      this.update(model);
    } else {
      this.saveServices(model);
    }
    form.reset();
  }

  find(id) {
    const sub = this.formationService.find(id).subscribe(data => {
      this.formation = data;
    });
    this.sub.push(sub);
  }
  update(model) {
    const sub = this.formationService.put(model).subscribe(data => {
      this.formation = data;
    });
    this.sub.push(sub);
  }
  saveServices(model) {
    const sub = this.formationService.save(model).subscribe(data => {
      this.formations = data;
    });
    this.sub.push(sub);
  }
  saveRx() {
    console.log(this.formationFormRx);
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.map(d => d.unsubscribe());
    }
  }

}
