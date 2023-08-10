import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemsPage } from './add-items.page';

describe('AddItemsPage', () => {
  let component: AddItemsPage;
  let fixture: ComponentFixture<AddItemsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
