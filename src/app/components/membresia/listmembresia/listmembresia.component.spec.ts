import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmembresiaComponent } from './listmembresia.component';

describe('ListmembresiaComponent', () => {
  let component: ListmembresiaComponent;
  let fixture: ComponentFixture<ListmembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
