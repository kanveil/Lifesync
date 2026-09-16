import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MockDataService } from '../data/mock-data.service';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar],
  templateUrl: './budget.page.html',
  styleUrl: './budget.page.scss',
})
export class BudgetPage {
  constructor(public data: MockDataService) {}

  pct(spent: number, limit: number) {
    return Math.min(100, Math.round((spent / limit) * 100));
  }

  isOverThreshold(spent: number, limit: number) {
    return spent / limit >= 0.85;
  }
}
