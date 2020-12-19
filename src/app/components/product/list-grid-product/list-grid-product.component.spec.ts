import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridProductComponent } from './list-grid-product.component';

describe('ListGridProductComponent', () => {
  let component: ListGridProductComponent;
  let fixture: ComponentFixture<ListGridProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGridProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
