import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule, TranslateModule, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private translate: TranslateService) {}
  ngOnInit() {
    if (!this.translate.currentLang) {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
    }
  }
}
