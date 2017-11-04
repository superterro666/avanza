import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  private titulo: string;
  private html: string;
  constructor(private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => {
      const datos = params['portfolio'];
      this.titulo = datos.titulo;
      this.html = datos.categoria;
    });
   }

  ngOnInit() {
  }

}
