import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss', './references-media.component.scss'],
})
export class ReferencesComponent implements AfterViewInit {
  @ViewChild('references') referencesContainer!: ElementRef;

  ngAfterViewInit() {
    const container = this.referencesContainer.nativeElement;
    container.scrollLeft = container.scrollWidth * (this.currentReferenceIndex / this.references.length);
    if (this.referencesContainer) {
      this.referencesContainer.nativeElement.scrollLeft = 0; // Scroll auf den ersten Punkt
    }
  }

  scrollToReference(index: number): void {
    const referenceDiv = document.querySelector('.referenceDiv');
    const references = referenceDiv?.querySelectorAll('.referenceBox');
    const targetReference = references ? references[index] : null;
  
    if (targetReference) {
      targetReference.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Scroll to center
      });
    }
  
    this.currentReferenceIndex = index; // Update the active point
  }  

  references = [
    {name: 'Sebastian Böhme', project: 'Project Kochwelt', reference: 'Während des Gruppenprojekts "Kochwelt" am Anfang des Kurses hat Siarhei immer wieder gezeigt wie hilfsbereit und zuvorkommend er ist. Durch seine fortgeschrittene Erfahrung, konnte er den Mitgliedern unserer Gruppe immer wieder wertvolle Tipps geben und hat damit beachtlich zum Erfolg des Projekts beigetragen. Auch außerhalb von Gruppenprojekten, stand er seinen Mitmenschen immer mit Rat und Tat zur Seite. Ein echter Teamplayer.'},
    {name: 'Jason', project: 'Project Join', reference: 'I had the pleasure of working with Siarhei on the group project JOIN. He was always reliable and demonstrated impressive quick learning skills, as well as the ability to effectively apply and deepen new knowledge. Thanks to his excellent communication skills, Siarhei managed the group confidently and ensured productive collaboration. His helpfulness and dedication made working with him a truly enjoyable experience. I highly recommend Siarhei for future projects.'},
    {name: 'Ben Dei', project: 'Projecthilfe', reference: "Although I didn't have the chance to work closely with Siarhei, he still left a lasting impression. His willingness to help and his extensive knowledge proved invaluable in solving some of my challenges. He always took the time to understand my issues and provided thoughtful, solution-oriented support. Collaborating with him would undoubtedly be a great asset!"},
  ]

  currentReferenceIndex = 0;
}
