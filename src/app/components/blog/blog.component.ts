import { Component, OnInit, Input } from '@angular/core';
import { SimpleTinyComponent } from './simple-tiny.component';
import { NgForm } from '@angular/forms';
import { BlogService } from '../servicios/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ SimpleTinyComponent ]
})

export class BlogComponent implements OnInit {
  public texto: string;
  private blogs: any = [];
  public blog = {
    id: 0,
    titulo: '',
    texto: ''
 };
  constructor(private _blog: BlogService, private _tiny: SimpleTinyComponent) {
    this.getBlogs();
   }

  ngOnInit() {
  }

  keyupHandlerFunction($event) {
    this.texto = $event;
  }

  onSubmit(blogForm: NgForm) {
    if (blogForm.valid) {
       const blog = {
         titulo: blogForm.value.titulo,
         texto: this.texto
      };
      this._blog.setBlog(blog);
      this.blog.id = 0;
      this.blog.titulo = '';
      this._tiny.update('');

      this._blog.listaBlog$.subscribe(data => {
      this.blogs = data;
      });
    }
  }

  getBlogs() {
    this._blog.getBlogs();
    this._blog.listaBlog$.subscribe(data => {
    this.blogs = data;
    });
  }

  getBlog(id: number) {
    this._blog.getBlog(id);
    this._blog.blog$.subscribe(data => {
    return data;
    });
  }

  update(id: number) {
    const datos = this.blogs[id];
    this.blog.id = datos['id'];
    this.blog.titulo = datos['titulo'];
    this.blog.texto = datos['texto'];
    this._tiny.update(datos['texto']);
 }

 updateData() {
   this._blog.updateBlog(this.blog);
   this.blog.id = 0;
   this.blog.titulo = '';
   this._tiny.update('');
   this._blog.blog$.subscribe(data => {
   this.blogs = data;
   });
 }


 deleteBlog(id: number): void {
   this._blog.deleteBlog(this.blogs[id]['id']);
   this.blog.id = 0;
   this.blog.titulo = '';
   this._tiny.update('');
   this._blog.listaBlog$.subscribe(data => {
   this.blogs = data;
   });

 }

}
