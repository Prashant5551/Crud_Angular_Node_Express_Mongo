import { Routes } from '@angular/router';
import { ModalCrud } from './modal-crud/modal-crud';
import { SidePanel } from './side-panel/side-panel';

export const routes: Routes = [
    {
        path: 'modal-popup',
        component:  ModalCrud
    },
    {
        path: 'side-panel',
        component: SidePanel
    }
];
