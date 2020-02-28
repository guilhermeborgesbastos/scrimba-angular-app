import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    { path: '**', pathMatch: 'full', redirectTo: '/not-found' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // The forRoot can only be used once.
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}