import { Component, OnInit } from '@angular/core';
import {GearService} from './gear.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css'],
  providers: [GearService]
})
export class GearComponent implements OnInit {
  gearList: string[];
  logoPaths: string[];
  listNav: string;

  constructor(private gearService: GearService) { }

  ngOnInit() {
    this.gearList = [];
    this.logoPaths = [];
    this.listNav = '';
  }

  onSelectKeys() {
    this.listNav = 'keys';
    this.gearList = this.gearService.getKeysList();
    this.logoPaths = this.gearService.getKeyLogos();
  }

  onSelectDrums() {
    this.listNav = 'drums';
  }

}
