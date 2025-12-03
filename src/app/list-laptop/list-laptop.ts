import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopService } from '../services/laptop';

@Component({
  selector: 'app-list-laptop',
  imports: [CommonModule],
  templateUrl: './list-laptop.html',
  styleUrl: './list-laptop.css'
})
export class ListLaptop {

    laptops = computed(() => this.laptopService.laptops());
    constructor(private laptopService: LaptopService) {}
    
    clearAll(){
        this.laptopService.clearLaptops();
    }

}
