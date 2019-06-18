import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';
import { GameComponent } from '../components/client/game/game.component';
import { AboutComponent } from '../components/client/about/about.component';
// 

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, pathMatch: 'full' },
  
  { path: '', component: DashboardComponent, pathMatch: 'full', data: { animation : 'isLeft' } },
  { path: 'games', component: DashboardComponent, pathMatch: 'full', data: { animation : 'isLeft' } },

  { path: 'game/:id_game', component: GameComponent, pathMatch: 'full', data: { animation : 'isRight'} },

  { path: 'about', component: AboutComponent, pathMatch: 'full', data: { animation : 'isBottom'} },

  // not found
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
