import { Component ,Input, OnInit } from '@angular/core';
import {RepositoryCard} from '../repository-card'
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss']
})
export class ReposCardComponent  {
  @Input() repos!:RepositoryCard
  constructor(){}
}
