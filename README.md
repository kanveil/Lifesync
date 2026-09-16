# LifeSync

An Ionic + Angular starter for **LifeSync** — an all-in-one daily routine, habit,
study, budget, and meal-planning app for students.

This is a working app shell: real navigation, a shared in-memory data layer,
and a full page for each module from the project brief. All data is mock/local
for now (see `src/app/data/mock-data.service.ts`) — swap it for a real API or
local database as the project matures.

## Stack

- **Ionic 7** + **Angular 17** (standalone components, signals — no NgModules)
- **Capacitor 5**, ready for `ios`/`android` native builds
- Self-hosted fonts via `@fontsource` (Space Grotesk + Inter — no external font CDN)

## Getting started

```bash
npm install
npm start          # ng serve, http://localhost:4200
```

Open it as a phone-sized screen: dev tools → toggle device toolbar, or run it
on a real device with Capacitor (see below).

## Project structure

```
src/app/
  onboarding/     Onboarding screen (first route)
  tabs/           Tab bar shell — the 5 primary destinations
  dashboard/      Unified Dashboard — Daily Routine & Checklist Hub
  planner/        Academic Study & Time Planner (schedule + priority matrix)
  habits/         Habit & Goal Tracker (streaks + progress logging)
  budget/         Personal Budget & Expense Logger
  meals/          Meal & Shopping Planner (weekly grid + grocery checklist)
  insights/       Cross-module Insights/Analytics page
  data/           MockDataService — single source of truth, signal-based
  models/         Shared TypeScript interfaces
theme/
  variables.scss  Design tokens (palette, fonts, radii) mapped to Ionic CSS vars
global.scss       Shared component classes (.ls-card, .ls-row, etc.)
```

## Design tokens

Palette and type choices live in `src/theme/variables.scss` — change them
there and the whole app updates. Headings use **Space Grotesk**; body/UI text
uses **Inter**. Category colors: sky = study, moss = habits/chores, clay =
streaks/energy, alert = budget warnings.

## Where the brief's "Future Integration Ideas" plug in

- **XML parsing / XSLT reports** (ILO 4): add a service under `src/app/data/`
  that reads exported routine/expense logs and feeds `MockDataService`'s
  shape — the pages don't need to change.
- **External APIs** (quotes, exchange rates) (ILO 3): call them from a new
  service and surface results on the Dashboard or Budget page.
- **Push/real-time alerts** (ILO 3): Capacitor has official plugins for local
  and push notifications; wire them into the medication reminder and habit
  streak logic in `MockDataService`.
- **Validation & sanitization** (ILO 2 & 5): add Angular reactive forms with
  validators to the budget "quick entry form" once it takes real input.

## Native builds (optional, once you're ready)

```bash
npm run build
npx cap add ios       # or android
npx cap copy
npx cap open ios      # or android
```

## Scripts

- `npm start` — dev server
- `npm run build` — production build to `dist/lifesync`
- `npm test` — unit tests (Karma/Jasmine scaffold from Angular CLI)
