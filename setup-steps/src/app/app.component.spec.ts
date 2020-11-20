import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './service/app.service';

describe('AppComponent', () => {
  beforeEach(async(() => {

    var employeeList = [{"id":"1","createdAt":"2019-07-11T07:25:10.284Z","name":"Mayank Bahringer","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg"},{"id":"2","createdAt":"2019-07-11T01:52:45.255Z","name":"Miss Gerda Terry","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg"},{"id":"3","createdAt":"2019-07-11T01:41:40.557Z","name":"Dr. Jacey Lindgren","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg"}];
    var AppServiceMock = {
      getData: () => {
        return "Hello World..."
      },
    
      getEmpList: () => {
        return of([{"id":"1","createdAt":"2019-07-11T07:25:10.284Z","name":"Mayank Bahringer","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg"},{"id":"2","createdAt":"2019-07-11T01:52:45.255Z","name":"Miss Gerda Terry","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg"},{"id":"3","createdAt":"2019-07-11T01:41:40.557Z","name":"Dr. Jacey Lindgren","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg"}]);
      }
    }

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [{provide: AppService, useValue: AppServiceMock}]
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Mayank'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hello World...');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h1').textContent).toContain('Hello World...');
    expect(element.getElementsByClassName('user_name').length).toBe(3);

    var component = fixture.componentInstance;
    component.employeeList = [{"id":"1","createdAt":"2019-07-11T07:25:10.284Z","name":"Mayank Bahringer","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg"},{"id":"2","createdAt":"2019-07-11T01:52:45.255Z","name":"Miss Gerda Terry","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg"}]
    fixture.detectChanges();
    expect(element.getElementsByClassName('user_name').length).toBe(2);
  });
});
