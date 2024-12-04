import { Component, AfterViewInit, HostListener } from '@angular/core';
import { TitelViewComponent } from "./titel-view/titel-view.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactformComponent } from "./contactform/contactform.component";
import { OngoingProjectComponent } from "./ongoing-project/ongoing-project.component";
import { ReferencesComponent } from "./references/references.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [TitelViewComponent, WhyMeComponent, SkillsComponent, MyWorkComponent, ContactformComponent, OngoingProjectComponent, ReferencesComponent, FooterComponent],
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements AfterViewInit {
  private mainViewContainer!: HTMLElement;

  ngAfterViewInit(): void {
    this.mainViewContainer = document.getElementById('main-view-container') as HTMLElement;
    this.mainViewContainer.style.overflowY = 'hidden';
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.mainViewContainer.contains(event.target as Node)) {
      const scrollSpeed = 150;
      this.mainViewContainer.scrollBy({
        left: event.deltaY > 0 ? scrollSpeed : -scrollSpeed
      });
      event.preventDefault();
    }
  }
}
