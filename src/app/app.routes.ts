import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/components/auth/auth.component';
import { ResultsComponent } from './core/components/results/results.component';
import { SurveyComponent } from './core/components/survey/survey.component';

const ROUTES : Routes = [
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: 'survey',
        component: SurveyComponent
    }
]

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true } )