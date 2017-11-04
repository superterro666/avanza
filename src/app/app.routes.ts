import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ShowComponent } from './components/show/show.component';



const APP_ROUTES: Routes = [
 { path: 'blog', component: BlogComponent },
 { path: 'portfolio', component: PortfolioComponent},
 { path: 'show/ :portfolio' , component: ShowComponent },
 { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
