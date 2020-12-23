import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmembresiaComponent } from './editmembresia.component';

describe('EditmembresiaComponent', () => {
  let component: EditmembresiaComponent;
  let fixture: ComponentFixture<EditmembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
