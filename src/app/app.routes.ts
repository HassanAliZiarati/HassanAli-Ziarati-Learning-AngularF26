import { Routes } from '@angular/router';
import { MotorcycleList } from './motorcycle-list/motorcycle-list';
import { MotorcycleDetail} from './motorcycle-detail/motorcycle-detail';
import { MotorcycleForm} from './motorcycle-form/motorcycle-form';

export const routes: Routes = [
  {
    path: '',
    component: MotorcycleList,
  },
  {
    path: 'motorcycles/add',
    component: MotorcycleForm,
  },
  {
    path: 'motorcycles/:id',
    component: MotorcycleDetail,
  },
];
