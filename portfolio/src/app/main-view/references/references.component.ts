import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    {name: 'Sebastian Böhme', project: 'Project Kochwelt', reference: 'Während des Gruppenprojekts "Kochwelt" am Anfang des Kurses hat Siarhei immer wieder gezeigt wie hilfsbereit und zuvorkommend er ist. Durch seine fortgeschrittene Erfahrung, konnte er den Mitgliedern unserer Gruppe immer wieder wertvolle Tipps geben und hat damit beachtlich zum Erfolg des Projekts beigetragen. Auch außerhalb von Gruppenprojekten, stand er seinen Mitmenschen immer mit Rat und Tat zur Seite. Ein echter Teamplayer.'},
    {name: 'Jason', project: 'Project Join', reference: 'I had the pleasure of working with Siarhei on the group project JOIN. He was always reliable and demonstrated impressive quick learning skills, as well as the ability to effectively apply and deepen new knowledge. Thanks to his excellent communication skills, Siarhei managed the group confidently and ensured productive collaboration. His helpfulness and dedication made working with him a truly enjoyable experience. I highly recommend Siarhei for future projects.'},
    {name: 'Ben Dei', project: 'Projecthilfe', reference: "Although I didn't have the chance to work closely with Siarhei, he still left a lasting impression. His willingness to help and his extensive knowledge proved invaluable in solving some of my challenges. He always took the time to understand my issues and provided thoughtful, solution-oriented support. Collaborating with him would undoubtedly be a great asset!"},
    {name: 'Marc Vossler', project: 'Projecthilfe', reference: "I had the chance to work with a talented programmer and learned a lot in the process. He is efficient, fast, and precise. Whenever minor challenges arise, Sergej is always there to solve them quickly. What impressed me the most was his work ethic and the strategic approach he takes to projects."},
  ]
}
