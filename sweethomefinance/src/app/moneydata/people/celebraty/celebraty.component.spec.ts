import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebratyComponent } from './celebraty.component';

describe('CelebratyComponent', () => {
  let component: CelebratyComponent;
  let fixture: ComponentFixture<CelebratyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebratyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebratyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
