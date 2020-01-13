import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PekaoListComponent } from './pekao-list.component';

describe('PekaoListComponent', () => {
  let component: PekaoListComponent;
  let fixture: ComponentFixture<PekaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PekaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PekaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
