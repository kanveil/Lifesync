import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.TABS_ROUTES),
  },
  {
    path: 'insights',
    loadComponent: () =>
      import('./insights/insights.page').then((m) => m.InsightsPage),
  },
];
