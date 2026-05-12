import { Routes } from '@angular/router';
import { ModalCrud } from './pages/modal-crud/modal-crud';
import { SidePanel } from './pages/side-panel/side-panel';
import { FormAboveTableCrud } from './pages/form-above-table-crud/form-above-table-crud';
import { InlineTableCrud } from './pages/inline-table-crud/inline-table-crud';

export const routes: Routes = [
    {
        path: 'modal-popup',
        component:  ModalCrud
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
        component : InlineTableCrud
    }
];
