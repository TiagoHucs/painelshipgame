import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { ButtonComponent } from './button/button.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { CautionPanelComponent } from './cockpit/caution-panel/caution-panel.component';
import { EnergyControlComponent } from './cockpit/energy-control/energy-control.component';
import { LevelsPanelComponent } from './cockpit/levels-panel/levels-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorComponent,
    ButtonComponent,
    CockpitComponent,
    CautionPanelComponent,
    EnergyControlComponent,
    LevelsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
