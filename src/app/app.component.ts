import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovieService } from './services/get-movie.service';
import { EstablishComunicationService } from './services/establish-comunication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu_angular01';

  data: any;
  searchValue: string = '';
  valorInput: string = '';

  constructor(private router: Router, private getMovieService: GetMovieService, private establishComunication: EstablishComunicationService) { }

  getSearchValue() {
    this.searchValue = this.valorInput
    this.valorInput = ""

    if (this.searchValue !== "") {
      this.router.navigateByUrl(`search?q=${this.searchValue}`)

      setTimeout(() => {
        this.getMovieService.searchList(this.searchValue).subscribe((response) => {
          this.data = response;
          this.establishComunication.data = response;
        })
      }, 300)
      
    }
  }

  ngOnInit(): void {
    // this.router.navigate(['/']);
  }

  performAction() {
    setTimeout(() => {
      this.router.navigateByUrl(`search?q=${this.searchValue}`)
      this.establishComunication.sendAction();
    }, 300)

  }
}