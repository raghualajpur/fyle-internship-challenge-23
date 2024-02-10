import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
describe('ApiService', () => {
  let service: ApiService; // Declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService,HttpClient]
    });
    service = TestBed.inject(ApiService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data from GitHub API', () => {
    const username = 'raghualajpur';
    const userData = {"login":"raghualajpur","id":91770580,"node_id":"U_kgDOBXhO1A","avatar_url":"https://avatars.githubusercontent.com/u/91770580?v=4","gravatar_id":"","url":"https://api.github.com/users/raghualajpur","html_url":"https://github.com/raghualajpur","followers_url":"https://api.github.com/users/raghualajpur/followers","following_url":"https://api.github.com/users/raghualajpur/following{/other_user}","gists_url":"https://api.github.com/users/raghualajpur/gists{/gist_id}","starred_url":"https://api.github.com/users/raghualajpur/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/raghualajpur/subscriptions","organizations_url":"https://api.github.com/users/raghualajpur/orgs","repos_url":"https://api.github.com/users/raghualajpur/repos","events_url":"https://api.github.com/users/raghualajpur/events{/privacy}","received_events_url":"https://api.github.com/users/raghualajpur/received_events","type":"User","site_admin":false,"name":"Alajpur Raghu","company":"KLU","blog":"https://raghualajpur.github.io","location":"Hyderabad","email":null,"hireable":null,"bio":null,"twitter_username":null,"public_repos":29,"public_gists":0,"followers":2,"following":2,"created_at":"2021-10-02T04:01:08Z","updated_at":"2024-02-07T20:44:41Z"};

    service.getUser(username).subscribe(data => {
      expect(data).toEqual(userData); 
    });
 
  });
  
});
