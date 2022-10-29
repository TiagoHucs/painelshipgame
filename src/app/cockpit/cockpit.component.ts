import { Component, OnInit } from '@angular/core';
import { DisasterService } from '../disaster.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor(private disaster: DisasterService) { }

  ngOnInit(): void {
    this.disaster.start();
  }

}
