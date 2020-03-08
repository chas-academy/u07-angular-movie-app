import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { Movie } from '../../movie';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {

  constructor(private filterComponent: FilterComponent) { }

  $movies: Movie[];

  ngOnInit(): void {
  }

}
