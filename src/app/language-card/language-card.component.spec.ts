import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCardComponent } from './language-card.component';

describe('LanguageCardComponent', () => {
  let component: LanguageCardComponent;
  let fixture: ComponentFixture<LanguageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageCardComponent]
    });
    fixture = TestBed.createComponent(LanguageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
