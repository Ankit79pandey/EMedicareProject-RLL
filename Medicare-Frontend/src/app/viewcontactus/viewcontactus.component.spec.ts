import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontactusComponent } from './viewcontactus.component';

describe('ViewcontactusComponent', () => {
  let component: ViewcontactusComponent;
  let fixture: ComponentFixture<ViewcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcontactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
