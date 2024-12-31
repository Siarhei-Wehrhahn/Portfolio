import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-titel-view',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './titel-view.component.html',
  styleUrl: './titel-view.component.scss',
})
export class TitelViewComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  isOverlayVisible = false;

  ngAfterViewInit(): void {
    const h1Element = this.el.nativeElement.querySelector('.name');
    const h22Element = this.el.nativeElement.querySelector('.sureName');
    const h2Element = this.el.nativeElement.querySelector('.job');

    setTimeout(() => this.renderer.addClass(h1Element, 'animate'), 0);
    setTimeout(() => this.renderer.addClass(h22Element, 'animate'), 500);
    setTimeout(() => this.renderer.addClass(h2Element, 'animate'), 1000);
  }

  scrollTo(target: string): void {
    const element = document.querySelector(target) as HTMLElement;

    if (element) {
      const mainViewContainer = document.getElementById('main-view-container');
      if (!mainViewContainer) {
        console.error('main-view-container not found');
        return;
      }

      const isContactSection = target === '#contactHeader';

      const headerOffset = isContactSection
        ? document.querySelector('#contactHeader')?.clientHeight || 6000
        : 0;

      const elementPosition =
        element.getBoundingClientRect().top + mainViewContainer.scrollTop;

      const offsetPosition = isContactSection
        ? elementPosition - (headerOffset + 50)
        : elementPosition;

      console.log(`Zielposition für ${target}: ${offsetPosition}`);

      mainViewContainer.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.error(
        `Element mit dem Selektor '${target}' wurde nicht gefunden.`
      );
    }
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

  switchLanguage(language: string) {
    this.translate.use(language);
    this.cdr.detectChanges();
  }
}
