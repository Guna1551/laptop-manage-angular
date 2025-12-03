import { Injectable, signal } from '@angular/core';
import { Laptop } from '../models/laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptops = signal<Laptop[]>(this.loadLaptop());

  private loadLaptop(): Laptop[] {
    const data = localStorage.getItem('laptops');
    return data ? JSON.parse(data) : [];
  }

  private saveLaptops(){
    localStorage.setItem('laptops', JSON.stringify(this.laptops()));
  }

  addLaptop(laptop: Laptop ){
    this.laptops.update(laptops => {
      const updated = [...laptops, laptop];
      localStorage.setItem('laptops', JSON.stringify(updated));
      return updated;
    });
  }

    clearLaptops() {
    this.laptops.set([]);  
    localStorage.removeItem('laptops');
  }
}

