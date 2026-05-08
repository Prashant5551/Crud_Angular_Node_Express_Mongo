import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrud } from './modal-crud';

describe('ModalCrud', () => {
  let component: ModalCrud;
  let fixture: ComponentFixture<ModalCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
