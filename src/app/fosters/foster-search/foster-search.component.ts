import { Component, OnInit } from '@angular/core';
import { FosterService } from '../shared/foster.service';

@Component({
  selector: 'app-foster-search',
  templateUrl: './foster-search.component.html',
  styleUrls: ['./foster-search.component.css']
})
export class FosterSearchComponent implements OnInit {

  constructor(
    private fosterService: FosterService
  ) { }

  ngOnInit() {
  }

  private filter(type: string) {
    this.fosterService.searchFosters(type);
  }
}
