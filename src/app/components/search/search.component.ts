import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { API_IMG } from '../../../environments/environments.prod';
import { ActivatedRoute } from '@angular/router';
import { GetMovieService } from '../../services/get-movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  parametroDaUrl: any;

  constructor(private route: ActivatedRoute, private getMovieService: GetMovieService) { 
    this.subscription = this.getMovieService.action$.subscribe(() => {
      console.log(`Ação realizada em appComponent`);
    })
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (q: any) => {this.parametroDaUrl = q["q"]}
    )
    console.log(this.parametroDaUrl)
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
