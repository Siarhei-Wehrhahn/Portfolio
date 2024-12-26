import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() scrollToTop!: () => void; 
  @Output() overlayToggle = new EventEmitter<void>();

  constructor(private translate: TranslateService) {}

  onBurgerClick(): void {
    this.overlayToggle.emit(); // Event auslösen
  }
  
  onLogoClick(): void {
    // scrollto top funktioniert noch nicht übers logo
    if (this.scrollToTop) {
      this.scrollToTop();
    }
  }
}
