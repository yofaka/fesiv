import {SIV} from './../siv';

import { Component, OnInit, Input } from '@angular/core';
 



@Component({
  selector: 'app-siv-detail',
  templateUrl: './siv-detail.component.html',
  styleUrls: ['./siv-detail.component.css']
})
export class SivDetailComponent implements OnInit {

  @Input() siv: SIV | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
