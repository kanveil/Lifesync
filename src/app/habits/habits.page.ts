import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { MockDataService } from '../data/mock-data.service';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonButton],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.scss',
})
export class HabitsPage {
  constructor(public data: MockDataService) {}

  log(id: string) {
    this.data.logHabitProgress(id, 1);
  }

  pct(progress: number, target: number) {
    return Math.min(100, Math.round((progress / target) * 100));
  }
}
