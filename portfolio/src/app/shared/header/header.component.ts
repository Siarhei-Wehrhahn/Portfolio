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
    this.overlayToggle.emit();
  }
  
  onLogoClick(): void {
    if (this.scrollToTop) {
      this.scrollToTop();
    }
  }
}
