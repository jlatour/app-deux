import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsUIComponent } from './items-ui.component';

describe('ItemsUIComponent', () => {
  let component: ItemsUIComponent;
  let fixture: ComponentFixture<ItemsUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
