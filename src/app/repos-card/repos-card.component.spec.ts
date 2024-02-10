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

  it('should match the structure of the Repository interface',()=>{
    const fixture=TestBed.createComponent(ReposCardComponent)
    const app=fixture.componentInstance
    const repos=app.repos
    expect(repos).toEqual(jasmine.objectContaining<RepositoryCard>({
      name:jasmine.any(String),
      description:jasmine.any(String),
      languages:jasmine.any(Array)
    }))
  })
});
