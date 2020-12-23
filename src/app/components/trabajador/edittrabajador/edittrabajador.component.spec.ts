import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrabajadorComponent } from './edittrabajador.component';

describe('EdittrabajadorComponent', () => {
  let component: EdittrabajadorComponent;
  let fixture: ComponentFixture<EdittrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
