import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOfficeListComponent } from './branch-office-list.component';

describe('BranchOfficeListComponent', () => {
  let component: BranchOfficeListComponent;
  let fixture: ComponentFixture<BranchOfficeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchOfficeListComponent]
    });
    fixture = TestBed.createComponent(BranchOfficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
