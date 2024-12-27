import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  http = inject(HttpClient)
  isChecked = false;
  isHovered = false;
  isFailed = false;
  checkboxSrc = './assets/svg-icons/checkbox.svg';
  @Output() scrollToTopEvent = new EventEmitter<void>();

  constructor(private translate: TranslateService) {}

  triggerScrollToTop(): void {
    this.scrollToTopEvent.emit();
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  toggleCheckbox() {
    if (this.isChecked) {
      this.isChecked = false;
      this.isFailed = false;
    } else {
      this.isChecked = true;
      this.isFailed = false;
    }
    this.updateCheckboxSrc();
  }  

  onHover(hovering: boolean) {
    this.isHovered = hovering;
    this.updateCheckboxSrc();
  }

  updateCheckboxSrc() {
    if (this.isFailed) {
      this.checkboxSrc = './assets/svg-icons/checkbox_failed.svg';
    } else if (this.isHovered && this.isChecked) {
      this.checkboxSrc = './assets/svg-icons/checkbox_hover.svg';
    } else if (this.isChecked) {
      this.checkboxSrc = './assets/svg-icons/checkbox_clicked.svg';
    } else if (this.isHovered) {
      this.checkboxSrc = './assets/svg-icons/checkbox_hover.svg';
    } else {
      this.checkboxSrc = './assets/svg-icons/checkbox.svg';
    }
  }  

  contactData = {
    name: "",
    email: "",
    message: "",
    terms: false
  }

  mailTest = false;

  post = {
    endPoint: 'sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid && this.isChecked && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.info('Formular erfolgreich gesendet', response);
            ngForm.resetForm();
            this.isChecked = false;
            this.updateCheckboxSrc();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('Senden abgeschlossen');
          },
        });
    } else if (ngForm.form.valid && this.isChecked && this.mailTest) {
      console.info('Test-Mail versendet');
      ngForm.resetForm(); // Formular zurücksetzen
      this.isChecked = false; // Checkbox zurücksetzen
      this.updateCheckboxSrc(); // Bild zurücksetzen
    } else {
      // Formular ist ungültig oder Checkbox nicht angeklickt
      if (!this.isChecked) {
        this.isFailed = true; // Fehlerstatus setzen
        this.updateCheckboxSrc(); // Bild auf "failed" setzen
      }
      console.warn('Bitte die Datenschutzerklärung akzeptieren.');
    }
  }
  
  
}
