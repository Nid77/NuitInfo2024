import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaduiComponent } from './badui.component';

describe('BaduiComponent', () => {
  let component: BaduiComponent;
  let fixture: ComponentFixture<BaduiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaduiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
