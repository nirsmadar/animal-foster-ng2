import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FosterService } from '../shared/foster.service';
import { Foster } from '../shared/foster.model';

@Component({
  selector: 'app-foster-details',
  templateUrl: './foster-details.component.html',
  styleUrls: ['./foster-details.component.css']
})
export class FosterDetailsComponent implements OnInit {
  foster: Foster;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FosterService
  ) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getFoster(+params['id']))
      .subscribe((foster: Foster) => this.foster = foster);
  }

  gotoFosters() {
    let fosterId = this.foster ? this.foster.id : null;
    // Pass along the foster id if available
    // so that the FosterList component can select that foster.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/fosters', { id: fosterId, foo: 'foo' }]);
  }
}
