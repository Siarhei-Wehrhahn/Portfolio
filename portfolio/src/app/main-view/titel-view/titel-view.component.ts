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
    const h2Element = this.el.nativeElement.querySelector('.job');

    this.renderer.addClass(h1Element, 'animate');
    this.renderer.addClass(h2Element, 'animate');
  }
}
