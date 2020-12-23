import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtrabajadorComponent } from './listtrabajador.component';

describe('ListtrabajadorComponent', () => {
  let component: ListtrabajadorComponent;
  let fixture: ComponentFixture<ListtrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
