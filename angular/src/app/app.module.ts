import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDataService, DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-items' },
  {
    path: 'todo-items',
    loadChildren: () =>
      import('./core/todo-items/todo-items.module').then(m => m.TodoItemsModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: environment.apiUrl,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
