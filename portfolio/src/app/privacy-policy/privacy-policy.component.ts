import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, TranslateModule, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private translate: TranslateService) {}
}
