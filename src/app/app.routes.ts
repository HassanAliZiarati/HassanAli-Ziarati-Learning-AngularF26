import { Routes } from '@angular/router';
import { MotorcycleList } from './motorcycle-list/motorcycle-list';
import { MotorcycleDetail} from './motorcycle-detail/motorcycle-detail';
import { MotorcycleForm} from './motorcycle-form/motorcycle-form';
import { editGuard } from './edit-guard';

export const routes: Routes = [
  // Show the list
  {
    path: '',
    component: MotorcycleList,
  },
  // Load the add form
  {
    path: 'motorcycles/add',
    loadComponent: () => import('./motorcycle-form/motorcycle-form').then((m) => m.MotorcycleForm),
  },
  // Load the edit form
  {
    path: 'motorcycles/edit/:id',
    loadComponent: () => import('./motorcycle-form/motorcycle-form').then((m) => m.MotorcycleForm),
    canActivate: [editGuard],
  },
  // Load motorcycle details
  {
    path: 'motorcycles/:id',
    loadComponent: () =>
      import('./motorcycle-detail/motorcycle-detail').then((m) => m.MotorcycleDetail),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found')
        .then(m => m.NotFound),
  }
];
