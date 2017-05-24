import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Formation } from 'app/shared/models/formation';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  @Input() formations: Array<Formation>;
  @Output() onDelete= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

   delete(id) {
     this.onDelete.emit(id);
  }
}
