import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms'; 
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [HttpClientTestingModule,FormsModule], 
    providers: [ApiService] 
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('fyle-frontend-challenge app is running!');
  });

  it('is repos Displayed on main',()=>{
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    const app=fixture.componentInstance
    const inputElement:HTMLInputElement=fixture.nativeElement.querySelector('input[type="text"]');
    inputElement.value="raghualajpur"
    inputElement.dispatchEvent(new Event('input'));
    const btn:HTMLButtonElement=fixture.nativeElement.querySelector('button[type="button"]')
    btn.dispatchEvent(new Event('click'))

    fixture.detectChanges()
    expect(app.display).toBe(true)
  })
});
