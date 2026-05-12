import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAboveTableCrud } from './form-above-table-crud';

describe('FormAboveTableCrud', () => {
  let component: FormAboveTableCrud;
  let fixture: ComponentFixture<FormAboveTableCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAboveTableCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAboveTableCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
