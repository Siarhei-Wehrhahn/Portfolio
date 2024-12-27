import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillIcon: { icon: string; name: string }[] = [];

  constructor(private translate: TranslateService) {
    this.loadSkills();
  }

  loadSkills() {
    this.skillIcon = [
      { icon: '../../assets/svg-icons/angular.svg', name: 'Angular' },
      { icon: '../../assets/svg-icons/typeScript.svg', name: 'TypeScript' },
      { icon: '../../assets/svg-icons/javaScript.svg', name: 'JavaScript' },
      { icon: '../../assets/svg-icons/html.svg', name: 'HTML' },
      { icon: '../../assets/svg-icons/css.svg', name: 'CSS' },
      { icon: '../../assets/svg-icons/api.svg', name: 'Rest-Api' },
      { icon: '../../assets/svg-icons/firebase.svg', name: 'Firebase' },
      { icon: '../../assets/svg-icons/git.svg', name: 'GIT' },
      { icon: '../../assets/svg-icons/scrum.svg', name: 'Scrum' },
      { icon: '../../assets/svg-icons/materialDesign.svg', name: 'Material design' },
      { icon: '../../assets/svg-icons/kotlin.svg', name: 'Kotlin' },
      { icon: '../../assets/svg-icons/swiftUi.svg', name: 'SwiftUi' },
      { icon: '../../assets/svg-icons/challengeMe.svg', name: 'Challenge Me' },
      { icon: '', name: this.translate.instant('SKILLTEXT') },
    ];
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.loadSkills(); // Skills neu laden, wenn sich die Sprache ändert
    });
  }
}
