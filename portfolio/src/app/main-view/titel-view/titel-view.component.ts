import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-titel-view',
  standalone: true,
  imports: [],
  templateUrl: './titel-view.component.html',
  styleUrl: './titel-view.component.scss'
})
export class TitelViewComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  isOverlayVisible = false;

  ngAfterViewInit(): void {
    const h1Element = this.el.nativeElement.querySelector('.name');
    const h22Element = this.el.nativeElement.querySelector('.sureName');
    const h2Element = this.el.nativeElement.querySelector('.job');

    setTimeout(() => this.renderer.addClass(h1Element, 'animate'), 0);
    setTimeout(() => this.renderer.addClass(h22Element, 'animate'), 500);
    setTimeout(() => this.renderer.addClass(h2Element, 'animate'), 1000);
  }

  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;

    const overlayElement = this.el.nativeElement.querySelector('.overlayMenue');
    if (this.isOverlayVisible) {
      this.renderer.setStyle(overlayElement, 'display', 'flex');
    } else {
      this.renderer.setStyle(overlayElement, 'display', 'none');
    }
  }
}
