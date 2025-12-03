import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
 private expenses: any[] = [];

  addExpense(expense: any) {
    console.log('[ExpenseService] addExpense called with:', expense);
    this.expenses.push(expense);
  }

  getExpenses() {
    console.log('[ExpenseService] getExpenses ->', this.expenses.length, 'items');
    return this.expenses;
  }
  
}
