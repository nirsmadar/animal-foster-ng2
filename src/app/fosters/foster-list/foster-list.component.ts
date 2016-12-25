// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FosterService } from '../shared/foster.service';
import { Foster } from '../shared/foster.model';

@Component({
  selector: 'app-foster-list',
  templateUrl: './foster-list.component.html',
  styleUrls: ['./foster-list.component.css']
})
export class FosterListComponent implements OnInit {

  fosters: Observable<Foster[]>;
  private selectedId: number;

  constructor(
    private service: FosterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.fosters = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getFosters();
      });
  }

  isSelected(foster: Foster) {
    return foster.id === this.selectedId;
  }

  onSelect(foster: Foster) {
    this.router.navigate(['/foster', foster.id]);
  }
}
