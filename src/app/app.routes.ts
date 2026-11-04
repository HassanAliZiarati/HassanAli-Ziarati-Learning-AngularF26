import { Routes } from '@angular/router';
import { MotorcycleList } from './motorcycle-list/motorcycle-list';
import { MotorcycleDetail} from './motorcycle-detail/motorcycle-detail';
import { MotorcycleForm} from './motorcycle-form/motorcycle-form';
import { editGuard } from './edit-guard';

export const routes: Routes = [
  // Show motorcycle List
  {
    path: '',
    component: MotorcycleList,
  },
  // Add a motorcycle, open the form
  {
    path: 'motorcycles/add',
    component: MotorcycleForm,
  },
  // Check if editing is allowed
  {
    path: 'motorcycles/edit/:id',
    component: MotorcycleForm,
    canActivate: [editGuard],
  },
  // Display motorcycle by ID
  {
    path: 'motorcycles/:id',
    component: MotorcycleDetail,
  },
];
