import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  statsChartOutline,
  medicalOutline,
  bookOutline,
  homeOutline,
  personOutline,
  checkmarkCircle,
} from 'ionicons/icons';
import { MockDataService } from '../data/mock-data.service';
import { RoutineCategory } from '../models/lifesync.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonCheckbox,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  private readonly categoryIcon: Record<RoutineCategory, string> = {
    medication: 'medical-outline',
    study: 'book-outline',
    chore: 'home-outline',
    personal: 'person-outline',
  };

  private readonly categoryAccent: Record<RoutineCategory, string> = {
    medication: 'accent-alert',
    study: 'accent-sky',
    chore: 'accent-moss',
    personal: 'accent-clay',
  };

  constructor(public data: MockDataService) {
    addIcons({
      statsChartOutline,
      medicalOutline,
      bookOutline,
      homeOutline,
      personOutline,
      checkmarkCircle,
    });
  }

  iconFor(category: RoutineCategory) {
    return this.categoryIcon[category];
  }

  accentFor(category: RoutineCategory) {
    return this.categoryAccent[category];
  }

  toggle(id: string) {
    this.data.toggleRoutineItem(id);
  }
}
