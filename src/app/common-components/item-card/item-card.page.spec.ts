import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardPage } from './item-card.page';

describe('ItemCardPage', () => {
  let component: ItemCardPage;
  let fixture: ComponentFixture<ItemCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
