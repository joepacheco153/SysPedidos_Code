import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrabajadorComponent } from './addtrabajador.component';

describe('AddtrabajadorComponent', () => {
  let component: AddtrabajadorComponent;
  let fixture: ComponentFixture<AddtrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
