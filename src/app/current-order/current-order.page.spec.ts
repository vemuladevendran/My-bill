import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentOrderPage } from './current-order.page';

describe('CurrentOrderPage', () => {
  let component: CurrentOrderPage;
  let fixture: ComponentFixture<CurrentOrderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CurrentOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
