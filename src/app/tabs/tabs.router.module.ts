import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: "sermons",
        children: [
          {
            path: "",
            loadChildren: "./pages/sermons/sermons.module#SermonsPageModule"
          }
        ]
      },
      {
        path: "events",
        children: [
          {
            path: "",
            loadChildren: "./pages/events/events.module#EventsPageModule"
          }
        ]
      },
      {
        path: "info",
        children: [
          {
            path: "",
            loadChildren: "./pages/info/info.module#InfoPageModule"
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sermons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
