import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Project {
  number: number;
  projectName: string;
  img: string;
  about: string;
  technologies: string;
  githubLink: string;
  liveTest: string;
  learned: string;
  showMore: boolean;
}

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrls: [
    './my-work-header.component.scss',
    './my-work-container.component.scss',
    './my-work.component.scss',
    './my-work-project-description.component.scss',
    './my-work-project-img.component.scss',
    './my-work-media.component.scss',
    './my-work-what-i-learned.component.scss',
  ],
})
export class MyWorkComponent implements AfterViewInit {
  private scrollableContainer!: HTMLElement;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    this.scrollableContainer = document.getElementById(
      'scrollable-container'
    ) as HTMLElement;
    this.scrollableContainer.style.overflowY = 'hidden';
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    const isWithinScrollable = this.scrollableContainer.contains(
      event.target as Node
    );

    if (isWithinScrollable) {
      const scrollSpeed = 500;
      this.scrollableContainer.scrollBy({
        left: event.deltaY > 0 ? scrollSpeed : -scrollSpeed,
      });
      event.preventDefault();
      event.stopPropagation();
    }
  }

  myProjects: Project[] = [];

  aboutJoin: string = '';
  aboutPolloLoco: string = '';
  aboutCleverKiddo: string = '';
  aboutJRadio: string = '';
  aboutGrowBro: string = '';

  learnedJoin: string = '';
  learnedPolloLoco: string = '';
  learnedCleverKiddo: string = '';
  learnedJRadio: string = '';
  learnedGrowBro: string = '';

  ngOnInit(): void {
    this.loadProjectData();

    this.translate.onLangChange.subscribe(() => {
      this.loadProjectData();
    });
  }

  loadProjectData() {
    this.translate
      .get([
        'GROWBROABOUTTEXT',
        'LOCOABOUTTEXT',
        'KIDDOABOUTTEXT',
        'JRADIOABOUTTEXT',
        'JOINABOUTTEXT',
        'GROWBROLEARNEDTEXT',
        'LOCOLEARNEDTEXT',
        'KIDDOLERNEDTEXT',
        'JRADIONLEARNEDTEXT',
        'JOINLEARNEDTEXT',
      ])
      .subscribe((translations) => {
        this.aboutJoin = translations['JOINABOUTTEXT'];
        this.aboutPolloLoco = translations['LOCOABOUTTEXT'];
        this.aboutCleverKiddo = translations['KIDDOABOUTTEXT'];
        this.aboutJRadio = translations['JRADIOABOUTTEXT'];
        this.aboutGrowBro = translations['GROWBROABOUTTEXT'];

        this.learnedJoin = translations['JOINLEARNEDTEXT'];
        this.learnedPolloLoco = translations['LOCOLEARNEDTEXT'];
        this.learnedCleverKiddo = translations['KIDDOLERNEDTEXT'];
        this.learnedJRadio = translations['JRADIONLEARNEDTEXT'];
        this.learnedGrowBro = translations['GROWBROLEARNEDTEXT'];

        this.myProjects = [
          {
            number: 1,
            projectName: 'Join',
            img: './assets/img/join.png',
            about: this.aboutJoin,
            technologies: 'HTML, CSS, JavaScript, Firebase',
            githubLink: 'https://github.com/Siarhei-Wehrhahn/JOIN',
            liveTest: '',
            learned: this.learnedJoin,
            showMore: true,
          },
          {
            number: 2,
            projectName: 'Pollo Loco',
            img: './assets/img/pollo_loco.png',
            about: this.aboutPolloLoco,
            technologies: 'HTML, CSS, JavaScript',
            githubLink: 'https://github.com/Siarhei-Wehrhahn/El_Polo_Loco',
            liveTest: '',
            learned: this.learnedPolloLoco,
            showMore: false,
          },
          {
            number: 3,
            projectName: 'Clever Kiddo',
            img: './assets/img/clever_kiddo.png',
            about: this.aboutCleverKiddo,
            technologies:
              'SwiftUi, Firebase, MVVM, Combine, SwiftUI State Management',
            githubLink: 'https://github.com/Siarhei-Wehrhahn/Clever-Kiddo-',
            liveTest: 'https://apps.apple.com/pk/app/clever-kiddo/id6498900984',
            learned: this.learnedCleverKiddo,
            showMore: false,
          },
          {
            number: 4,
            projectName: 'JRadio',
            img: './assets/img/j_radio.png',
            about: this.aboutJRadio,
            technologies: 'SwiftUi',
            githubLink: 'https://github.com/Siarhei-Wehrhahn/Jay-s_Webradio',
            liveTest: 'https://apps.apple.com/pk/app/jradio/id6479694888',
            learned: this.learnedJRadio,
            showMore: false,
          },
          {
            number: 5,
            projectName: 'GrowBro',
            img: './assets/img/grow_bro.png',
            about: this.aboutGrowBro,
            technologies: 'SwiftUi, ChatGPT API, Firebase, MVVM, CoreData',
            githubLink: 'https://github.com/Siarhei-Wehrhahn/GrowBro',
            liveTest: 'https://apps.apple.com/pk/app/growbro/id6547867443',
            learned: this.learnedGrowBro,
            showMore: false,
          },
        ];
      });
  }

  showMore(project: Project) {
    project.showMore = !project.showMore;
  }
}
