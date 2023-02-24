import { Component } from '@angular/core';

@Component({
  selector: 'app-sleeping-state',
  templateUrl: './sleeping-state.component.html',
  styleUrls: ['./sleeping-state.component.scss']
})
export class SleepingStateComponent {
  donutsData: number[] = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ];
}
