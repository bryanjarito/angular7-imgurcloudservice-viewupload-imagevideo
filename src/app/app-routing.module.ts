import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './components/pages/preview/preview.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preview/:id', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
