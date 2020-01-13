import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PekaoSectionComponent } from './pekao-section.component';

describe('PekaoSectionComponent', () => {
  let component: PekaoSectionComponent;
  let fixture: ComponentFixture<PekaoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PekaoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PekaoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
