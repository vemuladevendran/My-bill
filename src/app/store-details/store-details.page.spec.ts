import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreDetailsPage } from './store-details.page';

describe('StoreDetailsPage', () => {
  let component: StoreDetailsPage;
  let fixture: ComponentFixture<StoreDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StoreDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
