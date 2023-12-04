import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrativoFinanceiroPage } from './demonstrativo-financeiro.page';

describe('DemonstrativoFinanceiroPage', () => {
  let component: DemonstrativoFinanceiroPage;
  let fixture: ComponentFixture<DemonstrativoFinanceiroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemonstrativoFinanceiroPage]
    });
    fixture = TestBed.createComponent(DemonstrativoFinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
