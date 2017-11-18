import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { TOdo } from './todoList/todo.component';

export const ROUTES: Routes = [
    {path: 'todolist', component: TOdo},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);