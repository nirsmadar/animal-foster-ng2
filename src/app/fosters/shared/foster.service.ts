import { Injectable } from '@angular/core';
import { Foster } from './foster.model';

// let FOSTERS = [
//   new Foster(1, "Foster1"),
//   new Foster(2, "Foster2"),
//   new Foster(3, "Foster3"),
//   new Foster(4, "Foster4"),
//   new Foster(6, "Foster6"),
//   new Foster(5, "Foster5")
// ];

@Injectable()
export class FosterService {

  constructor(

  ) { }

  searchFosters() {

  }

  // getFosters() {
  //   return Promise.resolve(FOSTERS);;
  // }

  // getFoster(id: number | string) {
  //   return Promise.resolve(FOSTERS)
  //     .then(fosters => fosters.find(foster => foster.id === +id));
  // }
}
