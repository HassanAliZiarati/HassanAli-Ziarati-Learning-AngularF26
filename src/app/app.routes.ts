import { Routes } from '@angular/router';
import { MotorcycleList } from './motorcycle-list/motorcycle-list';
import { MotorcycleDetail} from './motorcycle-detail/motorcycle-detail';
import { MotorcycleForm} from './motorcycle-form/motorcycle-form';

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
  // Edit a motorcycle by its ID by opening the form
  {
    path: 'motorcycles/edit/:id',
    component: MotorcycleForm,
  },
  // Display motorcycle by ID
  {
    path: 'motorcycles/:id',
    component: MotorcycleDetail,
  },
];
