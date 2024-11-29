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
    this.mainViewContainer.style.overflowY = 'hidden';
  }  

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    const scrollSpeed = 150;
  this.mainViewContainer.scrollBy({
    left: event.deltaY > 0 ? scrollSpeed : -scrollSpeed
  });
  
    event.preventDefault();
  }
  

}
