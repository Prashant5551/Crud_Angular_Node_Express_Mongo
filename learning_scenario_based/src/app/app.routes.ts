import { Routes } from '@angular/router';
import { ModalCrud } from './pages/modal-crud/modal-crud';
import { SidePanel } from './pages/side-panel/side-panel';
import { FormAboveTableCrud } from './pages/form-above-table-crud/form-above-table-crud';
import { InlineTableCrud } from './pages/inline-table-crud/inline-table-crud';
import { List } from './pages/list/list';
import { NewForm } from './pages/new-form/new-form';
import { Variables } from './Angular_22/variables/variables';
import { DataBinding } from './Angular_22/data-binding/data-binding';
import { DirectiveExp } from './Angular_22/directive-exp/directive-exp';
import { NotFound } from './Angular_22/not-found/not-found';

export const routes: Routes = [
    {
        path: 'modal-popup',
        component: ModalCrud
    },
    {
        path: 'side-panel',
        component: SidePanel
    },
    {
        path: 'form-above-table',
        component: FormAboveTableCrud
    },
    {
        path: 'inline-table-crud',
        component: InlineTableCrud
    },
    {
        path: 'list',
        component: List
    },
    {
        path: 'new-form/:id',
        component: NewForm
    },
    {
        path:'variables',
        component:Variables
    },
    {
        path:'data-binding',
        component: DataBinding
    },
    {
        path:'directive',
        component: DirectiveExp
    },
    {
        path: '**',
        component: NotFound
    }
];
