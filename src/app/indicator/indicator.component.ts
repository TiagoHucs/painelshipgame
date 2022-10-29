import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() active: boolean | undefined;
  
  @Output() emmiter = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
