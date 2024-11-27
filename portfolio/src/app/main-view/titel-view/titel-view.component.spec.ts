import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelViewComponent } from './titel-view.component';

describe('TitelViewComponent', () => {
  let component: TitelViewComponent;
  let fixture: ComponentFixture<TitelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitelViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
