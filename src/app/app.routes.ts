import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ShowComponent } from './components/show/show.component';
import { AuthService } from './components/servicios/auth.service';



const APP_ROUTES: Routes = [
 { path: 'blog', component: BlogComponent, canActivate: [AuthService]},
 { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthService]},
 { path: 'show/ :portfolio' , component: ShowComponent, canActivate: [AuthService] },
 { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
