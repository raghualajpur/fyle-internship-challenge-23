import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError, Observable } from 'rxjs';
import { RepositoryCard } from '../repository-card';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getRepos(githubUsername: string){
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos `)
  }

  getLanguages(fullname:string){
    return this.httpClient.get(fullname)
  }
}
