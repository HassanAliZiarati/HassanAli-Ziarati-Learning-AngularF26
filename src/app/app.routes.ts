import { Routes } from '@angular/router';
import { MotorcycleList } from './motorcycle-list/motorcycle-list';
import { MotorcycleDetail} from './motorcycle-detail/motorcycle-detail';

export const routes: Routes = [
  {
    path: '',
    component: MotorcycleList
  },
  {
    path: 'motorcycles/:id',
    component: MotorcycleDetail
  }
];
