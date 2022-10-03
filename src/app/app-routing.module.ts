import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';

const routes: Routes = [ 
  {
    path: "",
    redirectTo: "/blog",
    pathMatch: "full"
  },
  {
    path: "blog",
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: "book",
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule)
  },
  {
    path: "user",
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: "blog/form",
    component: BlogFormComponent
  },
  {
    path: "book/form",
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
