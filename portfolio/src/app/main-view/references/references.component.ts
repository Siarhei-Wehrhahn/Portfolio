import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    {name: 'Sebastian Böhme', project: 'Project Join', reference: 'Während des Gruppenprojekts "Kochwelt" am Anfang des Kurses hat Siarhei immer wieder gezeigt wie hilfsbereit und zuvorkommend er ist. Durch seine fortgeschrittene Erfahrung, konnte er den Mitgliedern unserer Gruppe immer wieder wertvolle Tipps geben und hat damit beachtlich zum Erfolg des Projekts beigetragen. Auch außerhalb von Gruppenprojekten, stand er seinen Mitmenschen immer mit Rat und Tat zur Seite. Ein echter Teamplayer.'}
  ]
}
