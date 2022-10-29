import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameServerService } from './game-server.service';

@Injectable({
  providedIn: 'root'
})
export class DisasterService {
  options = ['CO2', 'BAT', 'O2', 'RCS', 'HEAT', 'ENG'];
  probability = 25;
  subscription: Subscription = new Subscription;

  constructor(private gameService: GameServerService) { }

  start() {
    const source = interval(1000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.opensnack());
  }

  opensnack() {
    let happenSomething: boolean = this.probability > this.getRandom(100);
    if (happenSomething) {
      console.log('DO');
      this.gameService.emitChangeEvent(this.options[this.getRandom(this.options.length)]);
    } else {
      console.log('DONOT');
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getRandomInt() {
    let max = this.options.length;
    return Math.floor(Math.random() * max);
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

}
