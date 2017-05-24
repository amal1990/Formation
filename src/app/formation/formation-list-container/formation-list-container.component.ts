import { Subscription } from 'rxjs/Subscription';
import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-formation-list-container',
  templateUrl: './formation-list-container.component.html',
  styleUrls: ['./formation-list-container.component.css']
})
export class FormationListContainerComponent implements OnInit, OnDestroy {
  formations: Array<Formation> = [];
  sub: Array<Subscription> = [];
  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.fetch();
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
