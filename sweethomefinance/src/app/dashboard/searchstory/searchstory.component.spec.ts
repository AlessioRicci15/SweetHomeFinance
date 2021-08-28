import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstoryComponent } from './searchstory.component';

describe('SearchstoryComponent', () => {
  let component: SearchstoryComponent;
  let fixture: ComponentFixture<SearchstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
