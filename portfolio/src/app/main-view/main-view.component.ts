import { Component, AfterViewInit, HostListener } from '@angular/core';
import { TitelViewComponent } from "./titel-view/titel-view.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [TitelViewComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements AfterViewInit {
  private mainViewContainer!: HTMLElement;
  private scrollingHorizontally: boolean = true;

  ngAfterViewInit(): void {
    this.mainViewContainer = document.getElementById('main-view-container') as HTMLElement;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (this.scrollingHorizontally) {
      // Horizontal scrollen basierend auf der Mausradbewegung
      this.mainViewContainer.scrollBy({
        left: event.deltaY < 0 ? -70 : 70, // Bewegt den Container je nach Scrollrichtung
      });
      event.preventDefault(); // Verhindert vertikales Scrollen

      // Überprüfen, ob das Ende des Containers erreicht wurde
      if (this.mainViewContainer.scrollLeft >= this.mainViewContainer.scrollWidth - this.mainViewContainer.clientWidth) {
        this.scrollingHorizontally = false;
        this.mainViewContainer.style.overflowY = 'auto'; // Ermöglicht vertikales Scrollen, wenn das Ende erreicht ist
      }
    } else {
      return true; // Wenn horizontal gescrollt wird, normales vertikales Scrollen zulassen
    }
  }
}
