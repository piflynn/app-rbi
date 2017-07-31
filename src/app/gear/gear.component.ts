import { Component, OnInit } from '@angular/core';
import {GearService} from './gear.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css'],
  providers: [GearService]
})
export class GearComponent implements OnInit {

  ngOnInit() {
  }

}
