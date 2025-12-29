import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contactus } from './pages/contactus/contactus';
import { Cyber } from './pages/cyber/cyber';
import { Dataeng } from './pages/dataeng/dataeng';
import { Devops } from './pages/devops/devops';
import { Cloud } from './pages/cloud/cloud';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'About',component:About},
    {path:'services',component:Services},
    {path:'contactus',component:Contactus},
    {path:'cyber',component:Cyber},
    {path:'dataeng',component:Dataeng},
    {path:'devops',component:Devops},
    {path:'cloud',component:Cloud}
    
];
