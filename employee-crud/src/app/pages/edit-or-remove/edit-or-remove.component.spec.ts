import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrRemoveComponent } from './edit-or-remove.component';

describe('EditOrRemoveComponent', () => {
  let component: EditOrRemoveComponent;
  let fixture: ComponentFixture<EditOrRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
