import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichestpeopleComponent } from './richestpeople.component';

describe('RichestpeopleComponent', () => {
  let component: RichestpeopleComponent;
  let fixture: ComponentFixture<RichestpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichestpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichestpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
