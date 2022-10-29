import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServerService  {
  emitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  emitChangeEvent(name: string) {
    this.emitter.emit(name);
  }

  getChangeEmitter() {
    return this.emitter;
  }
  
}
