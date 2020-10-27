import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloornavComponent } from './floornav.component';

describe('FloornavComponent', () => {
  let component: FloornavComponent;
  let fixture: ComponentFixture<FloornavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloornavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
