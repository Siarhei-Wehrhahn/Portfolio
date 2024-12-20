import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillIcon = [
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
    { icon: '', name: 'I am always happy to<br> learn new technologies,<br> just tell me what you<br> need.' } // Neuer Eintrag
  ];
}
