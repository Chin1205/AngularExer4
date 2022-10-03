import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogService } from './services/blog.service';
import { BlogItemComponent } from './components/blog-item/blog-item.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogFormComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [BlogService],
  bootstrap: [BlogListComponent]
})
export class BlogModule { }
