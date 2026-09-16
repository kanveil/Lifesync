import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { MockDataService } from '../data/mock-data.service';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
  ],
  templateUrl: './insights.page.html',
  styleUrl: './insights.page.scss',
})
export class InsightsPage {
  constructor(public data: MockDataService, private location: Location) {
    addIcons({ chevronBackOutline });
  }

  back() {
    this.location.back();
  }
}
