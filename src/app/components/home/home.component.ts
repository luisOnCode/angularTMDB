import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../../services/get-movie.service';
import { API_IMG } from '../../../environments/environments.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data: any = false;

  imageUrl: string = API_IMG;

  constructor(private getMovieService: GetMovieService) {
  
  }

  ngOnInit(): void {
    this.getMovieService.topRated().subscribe((response) => {
      this.data = response
    })
  }
   
}
