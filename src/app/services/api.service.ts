import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getLessons(){
    let lessons=[{
      id:1,
      name:"internet programcılığı",
      teacher:"Alper",
      duration:'4 saat',
      day:'Salı'
    },
    {
      id:2,
      name:"mobil programlama",
      teacher:'Alper',
      duration:'3 saat',
      day:'Perşembe'
    }
  ]
  return lessons;
  }


}
