import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/internal/operators';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass']
})
export class CountdownComponent implements OnInit {
   christmasDay;
   now;
   timeDiff: number;
   days: number;
   hours: number;
   minutes: number;
   seconds: number;

  constructor() { }

  ngOnInit() {
    this.christmasDay = new Date("2018-12-25 12:00:00").getTime();
    this.now = new Date().getTime();
    this.timeDiff = this.christmasDay - this.now;

    interval(1000).pipe(
      map((x) => {
        this.timeDiff = this.christmasDay - this.now;
    })).subscribe((x) => {
      this.days = this.getDays(this.timeDiff);
      this.hours = this.getHours(this.timeDiff);
      this.minutes = this.getMinutes(this.timeDiff);
      this.seconds = this.getSeconds(this.timeDiff);
  });
  }
  getDays(t) {
    let days;
    days =  Math.floor( t / ( 1000 * 60 * 60 * 24) );
    return days;
  }
  getHours(t) {
    let hours;
    hours = Math.floor( (t / ( 1000 * 60 * 60 ) ) % 24 );
    return hours;
  }
  getMinutes(t) {
    let minutes;
    minutes = Math.floor( ( t / 1000 / 60 ) % 60 );
    return minutes;
  }
  getSeconds(t) {
    return Math.floor( (t/1000) % 60 );
  }
}


