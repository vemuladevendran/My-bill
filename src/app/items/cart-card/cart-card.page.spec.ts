import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartCardPage } from './cart-card.page';

describe('CartCardPage', () => {
  let component: CartCardPage;
  let fixture: ComponentFixture<CartCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
