import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { MockDataService } from '../data/mock-data.service';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonCheckbox],
  templateUrl: './meals.page.html',
  styleUrl: './meals.page.scss',
})
export class MealsPage {
  readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  readonly mealTimes: Array<'Breakfast' | 'Lunch' | 'Dinner'> = [
    'Breakfast',
    'Lunch',
    'Dinner',
  ];

  constructor(public data: MockDataService) {}

  mealFor(day: string, meal: string) {
    return this.data
      .meals()
      .find((m) => m.day === day && m.meal === meal)?.name;
  }

  toggle(id: string) {
    this.data.toggleGroceryItem(id);
  }
}
