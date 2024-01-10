import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-button',
  templateUrl: './lang-button.component.html',
  styleUrl: './lang-button.component.css'
})
export class LangButtonComponent implements OnInit {
  lang: string = '';

  constructor(private translate: TranslateService) {
    
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;
    localStorage.setItem('lang', selectedLanguage);
    this.translate.use(selectedLanguage);
  }
}
