import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() scrollToTop!: () => void; 
  @Output() overlayToggle = new EventEmitter<void>();

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
