import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneydataComponent } from './moneydata.component';

describe('MoneydataComponent', () => {
  let component: MoneydataComponent;
  let fixture: ComponentFixture<MoneydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
