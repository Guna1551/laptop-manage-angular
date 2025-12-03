import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
export class CustomNgbDateFormatter extends NgbDateParserFormatter {
    private pad(n: number) {
    return n < 10 ? `0${n}` : `${n}`;
  }

  parse(value: string): NgbDateStruct | null {
    if (!value) {
      return null;
    }
    // expected dd-MM-yyyy
    const parts = value.trim().split('-');
    if (parts.length === 3) {
      const day = Number(parts[0]);
      const month = Number(parts[1]);
      const year = Number(parts[2]);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return { day, month, year };
      }
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (!date) return '';
    return `${this.pad(date.day)}-${this.pad(date.month)}-${date.year}`;
  }
}