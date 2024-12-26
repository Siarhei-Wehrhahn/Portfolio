import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ongoing-project',
  standalone: true,
  imports: [],
  templateUrl: './ongoing-project.component.html',
  styleUrl: './ongoing-project.component.scss'
})
export class OngoingProjectComponent {
  constructor(private translate: TranslateService) {}
}
