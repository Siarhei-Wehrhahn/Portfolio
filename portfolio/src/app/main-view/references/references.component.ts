import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  references: any[] = [];

  ngOnInit(): void {
    this.loadReferencesData();

    this.translate.onLangChange.subscribe(() => {
      this.loadReferencesData(); // Neu laden, wenn sich die Sprache ändert
    });
  }

  loadReferencesData() {
    this.translate.get([
      'SEBASTIANTEXT',
      'SEBASTIANPROJECT',
      'JASONTEXT',
      'JASONPROJECT',
      'BENTEXT',
      'BENPROJECT',
      'MARCTEXT',
      'MARCPROJECT'
    ]).subscribe(translations => {
      this.references = [
        {
          name: 'Sebastian Böhme',
          project: translations['SEBASTIANPROJECT'],
          reference: translations['SEBASTIANTEXT']
        },
        {
          name: 'Jason Peters',
          project: translations['JASONPROJECT'],
          reference: translations['JASONTEXT']
        },
        {
          name: 'Ben Dei',
          project: translations['BENPROJECT'],
          reference: translations['BENTEXT']
        },
        {
          name: 'Marc Vossler',
          project: translations['MARCPROJECT'],
          reference: translations['MARCTEXT']
        },
      ];
    });
  }
}
