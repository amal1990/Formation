import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Formation } from 'app/shared/models/formation';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit , OnDestroy{
  formations: Array<Formation> = [];
   sub: Array<Subscription> = [];
   formationsObs: Observable<Array<Formation>>;
  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.formationsObs = this.formationService.fetch();
    this.formationsObs.subscribe();
  }
  fetch() {
    this.formationService.fetch().subscribe(data => {
      console.log('data', data);
      this.formations = data;
    });

  }

   delete(id) {
    this.formationService.delete(id).subscribe(() => {
     this.fetch();
    });

  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.map(d => d.unsubscribe());
    }
  }
}
