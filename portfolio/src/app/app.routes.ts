import { Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {path: '', component: MainViewComponent}, 
    {path: 'privacy-policy', component: PrivacyPolicyComponent}, 
    {path: 'legal-notice', component: ImprintComponent}, 
];
