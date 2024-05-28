import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } 
from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.scss'
})
export class ParametreComponent {

  id:any;
  parametre:any;
  dersler:any[]=[]
  lesson:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private apiService:ApiService
  ){
      this.activeRoute.params.subscribe((param:any)=>{
          this.id = param.id
          this.parametre = param.pa
      })
      this.dersleriGetir()
  }


  dersleriGetir(){
    this.dersler = this.apiService.getLessons()
    console.log(this.dersler)
  }

  showDetail(lesson:any){
    this.lesson = lesson
  }

}
