import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipComponent } from './chip/chip.component';
import { AvatarComponent } from './chip/componets/avatar/avatar.component';
import { SvgButtonComponent } from './chip/componets/svg-button/svg-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    AvatarComponent,
    SvgButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
