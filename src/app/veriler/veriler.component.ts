import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-veriler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veriler.component.html',
  styleUrl: './veriler.component.scss'
})

export class VerilerComponent {

  title?:string;
  class?:number;
  isLesson:boolean=false;
  lesson:any;
  lessons?:any[]

  selectedLessonId:number=0;

  constructor(){
    this.lesson = "İnternet Programcılığı II"
    // this.lesson = 15;

    this.title ="Angular"
    this.class =2
    this.isLesson = true

    // this.showLessons()

    this.lessons = 
    ['Güvenli Yazılım Geliştirme','Bilgisayar Ağları']

    this.showLessons()

  }

  isLessonStatus(){

    this.isLesson = !this.isLesson

    let exam = false;
  }

  showLessons(){

    this.lessons = [
      {
        id:1,
        title:'Güvenli Yazılım Geliştirme',
        teacher:'Ertuğrul Duman',
        day:"Pazartesi",
        hour:"13:20"
      },
      {
        id:2,
        title:'Bilgisayar Ağları',
        teacher:'Ömer Faruk Acar',
        day:"Salı",
        hour:"09:20"
      },
    ]

  }

  selectedLesson(id:number){

    this.selectedLessonId = id
  }
}
