import { provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';

// Funktion für den HttpLoaderFactory
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Definiere hier deine Routen (falls noch nicht vorhanden)
const routes = [
  // Beispielroute
  { path: '', component: /* Deine Hauptkomponente */ MainViewComponent },
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient(),
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ),
];
