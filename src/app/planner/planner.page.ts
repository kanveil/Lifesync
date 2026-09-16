import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MockDataService } from '../data/mock-data.service';
import { StudyBlock } from '../models/lifesync.models';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar],
  templateUrl: './planner.page.html',
  styleUrl: './planner.page.scss',
})
export class PlannerPage {
  constructor(public data: MockDataService) {}

  byPriority(priority: StudyBlock['priority']) {
    return this.data.studyBlocks().filter((b) => b.priority === priority);
  }
}
