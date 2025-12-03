import { Routes } from '@angular/router';
import { AddLaptop } from './add-laptop/add-laptop';
import { ListLaptop } from './list-laptop/list-laptop';
import { ExpenseDetails } from './expense-details/expense-details';
import { ExpenseList } from './expense-list/expense-list';

export const routes: Routes = [

    { path: '',redirectTo: 'addLaptop', pathMatch: 'full'},
    { path: 'addLaptop', component: AddLaptop},
    { path: 'listLaptop', component: ListLaptop},
    { path: 'expenseDetails', component: ExpenseDetails },
    { path: 'expenseList', component: ExpenseList }
];
