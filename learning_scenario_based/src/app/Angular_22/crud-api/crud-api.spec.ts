import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAPI } from './crud-api';

describe('CrudAPI', () => {
  let component: CrudAPI;
  let fixture: ComponentFixture<CrudAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
