import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InsightsComponent } from './insights/insights.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountsComponent,
    NetWorthComponent,
    MarketMoversComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
