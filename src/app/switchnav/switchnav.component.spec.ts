import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchnavComponent } from './switchnav.component';

describe('SwitchnavComponent', () => {
  let component: SwitchnavComponent;
  let fixture: ComponentFixture<SwitchnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
