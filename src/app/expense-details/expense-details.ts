import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateParserFormatter, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbDatepickerModule],
  templateUrl: './expense-details.html',
  styleUrls: ['./expense-details.css']
})
export class ExpenseDetails implements OnInit {
expenseForm!: FormGroup;
  expenseTypes = [
    { id: 'office', label: 'Office' },
    { id: 'travel', label: 'Travel' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'other', label: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      expenseDate: [null, Validators.required],
      expenseType: ['', Validators.required],
      cost: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      paidTo: [''],
      billNo: [''],
      billDate: [null],
      comments: ['']
    });
  }

  toDdMmYyyy(date: NgbDateStruct | null): string | null {
    if (!date) return null;
    const d = date.day < 10 ? `0${date.day}` : `${date.day}`;
    const m = date.month < 10 ? `0${date.month}` : `${date.month}`;
    return `${d}-${m}-${date.year}`;
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    const raw = this.expenseForm.value;
    const payload = {
      expenseDate: this.toDdMmYyyy(raw.expenseDate),
      expenseType: raw.expenseType,
      cost: raw.cost,
      paidTo: raw.paidTo,
      billNo: raw.billNo,
      billDate: this.toDdMmYyyy(raw.billDate),
      comments: raw.comments
    };

    this.expenseService.addExpense(payload);

    console.log('[ExpenseDetails] after addExpense ->', this.expenseService.getExpenses());

    this.router.navigate(['/expenseList']);
  }

  onCancel() {
    this.expenseForm.reset();
  }
}
