import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAcountPage } from './create-acount.page';

describe('CreateAcountPage', () => {
  let component: CreateAcountPage;
  let fixture: ComponentFixture<CreateAcountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
