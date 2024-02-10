import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss']
})
export class LanguageCardComponent {
  @Input() languages: any

}
