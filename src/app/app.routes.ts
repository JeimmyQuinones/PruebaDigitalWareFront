import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './Pages/bill/bill.component';

const APP_ROUTES:Routes=[
    {path:'Bill', component:BillComponent },
    {path:'**', pathMatch:'full', redirectTo:'Bill' }
];

export const App_routing = RouterModule.forRoot(APP_ROUTES);