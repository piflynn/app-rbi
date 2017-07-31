import {Component, OnDestroy, OnInit} from '@angular/core';
import {GearService} from '../gear.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {
  gear: {itemList: string[], logoPaths: string[]};
  id: number;

  constructor(private gearService: GearService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.gear = this.gearService.getGear(this.id);
      }
    );
  }

}
