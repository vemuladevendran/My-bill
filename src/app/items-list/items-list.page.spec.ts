import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListPage } from './items-list.page';

describe('ItemsListPage', () => {
  let component: ItemsListPage;
  let fixture: ComponentFixture<ItemsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
