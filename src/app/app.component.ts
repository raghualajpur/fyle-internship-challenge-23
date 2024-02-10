import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './services/api.service';
import {RepositoryCard} from './repository-card';
import { Observable, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showSkeliton:boolean=false;
  title:string='fyle-frontend-challenge'
  userData : any;
  selectedValue:any=10;
  userRepos: RepositoryCard[]=[];
  modifiedRepos:any[]=[];
  activeIndex:any=0;
  searchingGit:string="";
  display:boolean=false;
  twitter:string="";
  leftDisplay:boolean=false
  rightDisplay:boolean=true
  constructor(
    private apiService: ApiService,
  ) {}

  searchForGit(e: string) {
    this.userData={}
    this.userRepos=[]
    this.display = true;
    this.showSkeliton=true
    this.searchingGit = e;
    this.apiService.getUser(this.searchingGit).subscribe((data: any) => {
      this.userData = data,
      this.showSkeliton=false
      this.twitter=`https://twitter.com/${data.twitter_username}`
    });
    this.apiService.getRepos(this.searchingGit).subscribe((repos: any) => {
      this.showSkeliton=false
      this.userRepos=repos.map((eachRepo:any)=>({
        name:eachRepo.name,
        description:eachRepo.description,
        languages:eachRepo.topics
      }))
      
      this.modifiedRepos=this.splitArray(this.userRepos,this.userRepos.length/(this.selectedValue))

      console.log(this.modifiedRepos)

    });
    this.searchingGit = "";
  }

  splitArray(arr:any, rows:any){
    const itemsPerRow = Math.ceil(arr.length / rows);
    return arr.reduce((acc:any, val:any, ind:any) => {
       const currentRow = Math.floor(ind / itemsPerRow);
       if(!acc[currentRow]){
          acc[currentRow] = [val];
       }else{
          acc[currentRow].push(val);
       };
       return acc;
    }, []);
 };

 showOnThisIndex(e:any){
  this.activeIndex=e
  console.log(this.activeIndex)
  if(this.activeIndex==0){
    this.leftDisplay=false
  }else{
    this.leftDisplay=true
  }
  if(this.activeIndex==this.modifiedRepos.length-1){
    this.rightDisplay=false
  }else{
    this.rightDisplay=true
  }
 }

  onSelectionChange(){
    
    this.modifiedRepos=this.splitArray(this.userRepos,this.userRepos.length/(this.selectedValue))
    this.activeIndex=0
    if(this.activeIndex==0){
      this.leftDisplay=false
    }else{
      this.leftDisplay=true
    }
    if(this.activeIndex==this.modifiedRepos.length-1){
      this.rightDisplay=false
    }else{
      this.rightDisplay=true
    }
  }

  decrementIndex(){
    if(this.activeIndex>0){
    this.activeIndex--
    }
    if(this.activeIndex==0){
      this.leftDisplay=false
    }else{
      this.leftDisplay=true
    }
    if(this.activeIndex==this.modifiedRepos.length-1){
      this.rightDisplay=false
    }else{
      this.rightDisplay=true
    }
  }
  incrementIndex(){
    if(this.activeIndex<this.modifiedRepos.length-1){
    this.activeIndex++
    }
    if(this.activeIndex==this.modifiedRepos.length-1){
      this.rightDisplay=false
    }else{
      this.rightDisplay=true
    }
    if(this.activeIndex==0){
      this.leftDisplay=false
    }else{
      this.leftDisplay=true
    }
  }


  


  ngOnInit() {
    if(this.searchingGit.length>0){
    this.searchForGit(this.searchingGit)
    
    }else{
      this.display=false
    }
  }

}
