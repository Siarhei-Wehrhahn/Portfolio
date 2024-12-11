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

  ngAfterViewInit(): void {
    const h1Element = this.el.nativeElement.querySelector('.name');
    const h22Element = this.el.nativeElement.querySelector('.sureName');
    const h2Element = this.el.nativeElement.querySelector('.job');

    // Set classes with delays for animations
    setTimeout(() => this.renderer.addClass(h1Element, 'animate'), 0); // Immediate
    setTimeout(() => this.renderer.addClass(h22Element, 'animate'), 500); // After 0.5s
    setTimeout(() => this.renderer.addClass(h2Element, 'animate'), 1000); // After 1s
  }
}
