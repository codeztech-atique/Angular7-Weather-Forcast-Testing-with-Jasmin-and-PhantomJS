import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" style="background-color:black !important">
      <span>Weather Report</span>
    </mat-toolbar>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
    </div>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card fxFlex="300px" style="padding:15px">
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
    <div style="margin-left: 75%;margin-top: 12%;">
      <p>© Copyright 2020, Codez Tech by Atique Ahmed</p>
    </div>
  `,
})
export class AppComponent {}
