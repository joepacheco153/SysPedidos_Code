import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmembresiaComponent } from './addmembresia.component';

describe('AddmembresiaComponent', () => {
  let component: AddmembresiaComponent;
  let fixture: ComponentFixture<AddmembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
