import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu_angular01';

  searchValue: string = '';

  valorInput: string = '';

  getSearchValue() {
    this.searchValue = this.valorInput
    this.valorInput = ""
    console.log(this.searchValue)
  }
}
