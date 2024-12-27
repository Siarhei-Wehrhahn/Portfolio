import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ongoing-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './ongoing-project.component.html',
  styleUrl: './ongoing-project.component.scss'
})
export class OngoingProjectComponent {
  constructor(private translate: TranslateService) {}
}
