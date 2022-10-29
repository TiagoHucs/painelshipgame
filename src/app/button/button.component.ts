import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameServerService } from '../game-server.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Output() emmiter = new EventEmitter<any>()

  constructor(
    private gameService: GameServerService
  ) {
    this.name = '';
   }

  ngOnInit(): void {
    this.name
  }

  click(){
    console.log('clicou: ' + this.name);
    this.gameService.emitChangeEvent(this.name);
  }

}
