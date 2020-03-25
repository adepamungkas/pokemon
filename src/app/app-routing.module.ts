import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent} from './preview/preview.component';
import {DetailComponent} from './detail/detail.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: 'preview', component: PreviewComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', redirectTo:  'App', pathMatch:  'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
