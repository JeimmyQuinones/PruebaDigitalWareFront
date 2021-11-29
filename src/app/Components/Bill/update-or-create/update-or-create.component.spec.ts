import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrCreateComponent } from './update-or-create.component';

describe('UpdateOrCreateComponent', () => {
  let component: UpdateOrCreateComponent;
  let fixture: ComponentFixture<UpdateOrCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
