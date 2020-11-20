import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeDataService } from './service/employee.service';
import { of } from "rxjs";

describe('AppComponent', () => {
  beforeEach(async(() => {

    var employeeDataService = {
      getEmployeeData: () => {
        return of([{name: "Ankit"}, {name: "Ankit Gupta"}])
      }
    }
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AppComponent],
      providers: [{
        provide: EmployeeDataService, useValue: employeeDataService
      }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.componentRef;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'single-page-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('single-page-app...');
    expect(app.empList.length).toEqual(2);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('single-page-app...');

    const app = fixture.componentInstance;
    app.title = "Hello Mayank";
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Hello Mayank');


    app.empList = [{name: "Ankit"}]
    fixture.detectChanges();

    expect(compiled.getElementsByClassName("user_name").length).toBe(1)

  });
});
