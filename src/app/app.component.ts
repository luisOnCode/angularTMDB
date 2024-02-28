import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetMovieService } from './services/get-movie.service';
import { SearchComponent } from './components/search/search.component';


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

  constructor(private router: Router, private getMovieService: GetMovieService){}

  getSearchValue() {
    this.searchValue = this.valorInput
    this.valorInput = ""
    
    if(this.searchValue !== ""){
      this.router.navigateByUrl(`search?q=${this.searchValue}`)

    this.getMovieService.searchList(this.searchValue).subscribe((response) => {
      this.data = response
    })
    }
  }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

  performAction(){
    this.getMovieService.sendAction();
  }
}
