import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonaComponent } from './listpersona.component';

describe('ListpersonaComponent', () => {
  let component: ListpersonaComponent;
  let fixture: ComponentFixture<ListpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
