import { Component, OnInit } from '@angular/core';
import { GameServerService } from 'src/app/game-server.service';

@Component({
  selector: 'app-caution-panel',
  templateUrl: './caution-panel.component.html',
  styleUrls: ['./caution-panel.component.css']
})
export class CautionPanelComponent implements OnInit {
  subscription: any;
  batOn = false;
  o2On = false;
  heatOn = false;
  co2On = false;
  engOn = false;
  rcsOn = false;

  constructor(
    private gameService: GameServerService
  ) { }

  ngOnInit() {
    this.subscription = this.gameService.getChangeEmitter()
      .subscribe(item => {
        console.log('Caution Painel recebeu um evento: ' + item);
        this.changeIndicatorStatus(item)
      });
  }

  changeIndicatorStatus(indicatorName: string): void {
    switch (indicatorName) {
      case 'O2':
        this.o2On = !this.o2On;
        break;
      case 'BAT':
        this.batOn = !this.batOn;
        break;
      case 'HEAT':
        this.heatOn = !this.heatOn;
        break;
      case 'CO2':
        this.co2On = !this.co2On;
        break;
      case 'ENG':
        this.engOn = !this.engOn;
        break;
      case 'RCS':
        this.rcsOn = !this.rcsOn;
        break;
      default:
        break;
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
