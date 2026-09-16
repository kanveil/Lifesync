import { Injectable, computed, signal } from '@angular/core';
import {
  BudgetCategory,
  Expense,
  GroceryItem,
  HabitStreak,
  MealSlot,
  RoutineItem,
  StudyBlock,
} from '../models/lifesync.models';

// A single in-memory store standing in for a real backend / local DB.
// Swap the signal seeds below for API or SQLite-backed data later —
// every page already reads through this service, not static arrays.
@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly userName = signal('Mika');

  readonly routine = signal<RoutineItem[]>([
    { id: 'r1', title: 'Take morning allergy pill', time: '7:30 AM', category: 'medication', done: false, requiresConfirmation: true },
    { id: 'r2', title: 'Review Bio 201 flashcards', time: '8:00 AM', category: 'study', done: false },
    { id: 'r3', title: 'Laundry — load 1', time: '9:00 AM', category: 'chore', done: false },
    { id: 'r4', title: 'Grocery run', time: '5:30 PM', category: 'chore', done: false },
    { id: 'r5', title: 'Evening reading, 20 min', time: '9:00 PM', category: 'personal', done: false },
  ]);

  readonly habits = signal<HabitStreak[]>([
    { id: 'h1', name: 'Water intake', streakDays: 12, target: 8, progress: 5, unit: 'glasses' },
    { id: 'h2', name: 'Reading', streakDays: 6, target: 30, progress: 20, unit: 'min' },
    { id: 'h3', name: 'Sleep by 11pm', streakDays: 3, target: 1, progress: 0, unit: 'night' },
  ]);

  readonly studyBlocks = signal<StudyBlock[]>([
    { id: 's1', course: 'Bio 201 — Midterm review', time: 'Today, 8:00 AM', durationMin: 45, priority: 'urgent' },
    { id: 's2', course: 'Econ 110 — Problem set 4', time: 'Today, 4:00 PM', durationMin: 60, priority: 'soon' },
    { id: 's3', course: 'Design Studio — Reading', time: 'Tomorrow, 10:00 AM', durationMin: 30, priority: 'later' },
  ]);

  readonly budgetCategories = signal<BudgetCategory[]>([
    { id: 'b1', name: 'Food', spent: 142, limit: 200 },
    { id: 'b2', name: 'Transport', spent: 58, limit: 60 },
    { id: 'b3', name: 'Utilities', spent: 35, limit: 100 },
  ]);

  readonly expenses = signal<Expense[]>([
    { id: 'e1', label: 'Campus cafe', category: 'Food', amount: 6.5, date: 'Today' },
    { id: 'e2', label: 'Bus pass top-up', category: 'Transport', amount: 20, date: 'Yesterday' },
    { id: 'e3', label: 'Grocery run', category: 'Food', amount: 34.2, date: 'Yesterday' },
  ]);

  readonly meals = signal<MealSlot[]>([
    { id: 'm1', day: 'Mon', meal: 'Breakfast', name: 'Oats + banana' },
    { id: 'm2', day: 'Mon', meal: 'Lunch', name: 'Chicken rice bowl' },
    { id: 'm3', day: 'Mon', meal: 'Dinner', name: 'Veggie stir-fry' },
    { id: 'm4', day: 'Tue', meal: 'Breakfast', name: 'Toast + eggs' },
  ]);

  readonly groceries = signal<GroceryItem[]>([
    { id: 'g1', name: 'Rice, 2kg', checked: false },
    { id: 'g2', name: 'Eggs, 1 dozen', checked: false },
    { id: 'g3', name: 'Mixed vegetables', checked: true },
    { id: 'g4', name: 'Chicken breast', checked: false },
  ]);

  readonly routineProgress = computed(() => {
    const items = this.routine();
    const done = items.filter((i) => i.done).length;
    return items.length ? Math.round((done / items.length) * 100) : 0;
  });

  readonly totalSpent = computed(() =>
    this.budgetCategories().reduce((sum, c) => sum + c.spent, 0),
  );

  readonly totalLimit = computed(() =>
    this.budgetCategories().reduce((sum, c) => sum + c.limit, 0),
  );

  toggleRoutineItem(id: string) {
    this.routine.update((items) =>
      items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)),
    );
  }

  logHabitProgress(id: string, amount: number) {
    this.habits.update((items) =>
      items.map((h) =>
        h.id === id
          ? { ...h, progress: Math.min(h.target, h.progress + amount) }
          : h,
      ),
    );
  }

  toggleGroceryItem(id: string) {
    this.groceries.update((items) =>
      items.map((g) => (g.id === id ? { ...g, checked: !g.checked } : g)),
    );
  }
}
