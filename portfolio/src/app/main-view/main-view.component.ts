import { Component, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { TitelViewComponent } from './titel-view/titel-view.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactformComponent } from './contactform/contactform.component';
import { OngoingProjectComponent } from './ongoing-project/ongoing-project.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    TitelViewComponent,
    WhyMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactformComponent,
    OngoingProjectComponent,
    ReferencesComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements AfterViewInit {
  private mainViewContainer!: HTMLElement;
  private isWideScreen: boolean = false;

  @ViewChild(TitelViewComponent) titelViewRef!: TitelViewComponent;

  toggleOverlay(): void {
    if (this.titelViewRef?.toggleOverlay) {
      this.titelViewRef.toggleOverlay();
    } else {
      console.error('TitelViewComponent not found or toggleOverlay not defined');
    }
  }

  scrollToTop(): void {
    const mainViewContainer = document.getElementById('main-view-container');
    if (!mainViewContainer) {
      console.error('main-view-container not found');
      return;
    }
    mainViewContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit(): void {
    this.mainViewContainer = document.getElementById('main-view-container') as HTMLElement;
    this.updateScreenWidth();
  }

  @HostListener('window:resize')
  updateScreenWidth(): void {
    this.isWideScreen = window.innerWidth > 1024;
    this.mainViewContainer.style.overflowY = this.isWideScreen ? 'hidden' : 'auto';
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.isWideScreen && this.mainViewContainer.contains(event.target as Node)) {
      const scrollSpeed = 150;
      this.mainViewContainer.scrollBy({
        left: event.deltaY > 0 ? scrollSpeed : -scrollSpeed
      });
      event.preventDefault();
    }
  }
}
