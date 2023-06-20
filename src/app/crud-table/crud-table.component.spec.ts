import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableComponent } from './crud-table.component';

describe('CrudTableComponent', () => {
  let component: CrudTableComponent;
  let fixture: ComponentFixture<CrudTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableComponent]
    });
    fixture = TestBed.createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
