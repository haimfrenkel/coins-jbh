import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { CoinComponent } from './components/coin/coin.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { AboutComponent } from './components/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinsListComponent,
    CoinComponent,
    MoreInfoComponent,
    SearchComponent,
    RealTimeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
