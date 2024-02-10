import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposCardComponent } from './repos-card.component';
import { RepositoryCard } from '../repository-card';
describe('ReposCardComponent', () => {
  let component: ReposCardComponent;
  let fixture: ComponentFixture<ReposCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposCardComponent],
    });
    fixture = TestBed.createComponent(ReposCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
