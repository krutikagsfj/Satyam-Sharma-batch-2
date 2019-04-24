import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviIconComponent } from './favi-icon.component';

describe('FaviIconComponent', () => {
  let component: FaviIconComponent;
  let fixture: ComponentFixture<FaviIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaviIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
