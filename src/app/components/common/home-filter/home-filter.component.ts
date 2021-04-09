import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss'],
})
export class HomeFilterComponent {
  dropdownOpen: boolean = false;
  searchCategory: string = 'now_playing';
  searchCategoryDisplay: string = 'In Theatres';
  // Inputs
  genreArray = [];

  @Output() sendCategoryData: EventEmitter<any> = new EventEmitter();
  @Output() sendGenreData: EventEmitter<any> = new EventEmitter();
  @Output() sendFilterData: EventEmitter<any> = new EventEmitter();

  openDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  // Test stuff
  @Input() amount;
  @Output() amountChange = new EventEmitter();

  selectActionGenre(event) {
    console.log(event.target.checked);
  }

  withdraw(event) {
    if (event.target.checked) {
      this.amount.push(event.target.name);
    }
    if (!event.target.checked) {
      this.amount.splice(this.amount.indexOf(event.target.checked));
    }

    // if (event.target.checked) {
    //   this.amount = event.target.name;
    // } else {
    //   this.amount = '';
    // }
    this.amountChange.emit(this.amount);
  }
  // Test stuff

  onSelect(event) {
    this.searchCategory = event.target.name;
    this.searchCategoryDisplay = event.target.innerText;
    this.dropdownOpen = false;
  }
  submitSearch() {
    this.sendFilterData.emit([this.searchCategory, this.genreArray.join()]);
    // this.sendCategoryData.emit(this.searchCategory);
    // this.sendGenreData.emit(this.genreArray.join());
  }

  addGenreToArray(event) {
    if (event.target.checked) {
      this.genreArray.push(event.target.name);
    }
    if (!event.target.checked) {
      this.genreArray.splice(this.genreArray.indexOf(event.target.checked));
    }
    console.log(this.genreArray);
  }
  // includeDrama: boolean = false;
  // filterString: string = '';

  // testObj = {
  //   drama: false,
  //   comedy: false,
  // };

  // filterUpdated() {
  //   // this.createFilterString();
  //   this.getFilterData.emit(this.testObj);
  // }

  // createFilterString() {
  //   if (this.includeDrama === true) {
  //     this.filterString = '18';
  //   } else {
  //     this.filterString = '';
  //   }
  // }
}
