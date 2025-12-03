import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../services/laptop';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-laptop',
  imports: [ReactiveFormsModule],
  templateUrl: './add-laptop.html',
  styleUrl: './add-laptop.css'
})
export class AddLaptop {
  form: any;

  constructor(
    private fb: FormBuilder,
    private laptopService: LaptopService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [null],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      cpu: ['', Validators.required],
      ramGb: [null, [Validators.required, Validators.min(2)]],
      storage: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1000)]],
      purchaseDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.laptopService.addLaptop(this.form.value);
      this.router.navigate(['/listLaptop']);
    } else {
      alert('Please fill all the details given in this form to add Laptop')
      this.form.markAllAsTouched();
    }
  }

  viewLaptops(){
    this.router.navigate(['/listLaptop']);
  }
}
