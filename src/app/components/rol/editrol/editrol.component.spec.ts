import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrolComponent } from './editrol.component';

describe('EditrolComponent', () => {
  let component: EditrolComponent;
  let fixture: ComponentFixture<EditrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
