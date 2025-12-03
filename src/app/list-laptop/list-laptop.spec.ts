import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaptop } from './list-laptop';

describe('ListLaptop', () => {
  let component: ListLaptop;
  let fixture: ComponentFixture<ListLaptop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLaptop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLaptop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
