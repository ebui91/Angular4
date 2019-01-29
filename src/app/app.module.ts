import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';

import { MockDataService } from './services/mock-data.service';
import { DetailsComponent } from './details/details.component';


const appRoutes: Routes = [
  { path: '', component: CarComponent}
  { path: 'details', component: DetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MockDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
