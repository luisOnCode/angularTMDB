import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_KEY, API_PATH } from '../../../environments/environments';
import { GetMovieService } from '../../services/get-movie.service';
import { API_IMG } from '../../../environments/environments.prod';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  data: any = false;
  teste: any;
  apiUrl: string = API_PATH;
  apiKey: string = API_KEY;
  imgUrl: string = API_IMG;

  constructor(private route: ActivatedRoute, private router: Router, private getMovieService: GetMovieService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (p: any) => { this.teste = p }
    )
    this.getMovieService.movieDetails(this.teste.id).subscribe(response => {
      this.data = response;
    })

    setTimeout(() => {
      console.log(this.data)
    }, 400)
  }
}
