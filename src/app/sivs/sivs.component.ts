import { Component, OnInit } from '@angular/core';
import { SIVs } from '../mock-siv';
import {SIV} from '../siv';

@Component({
  selector: 'app-sivs',
  templateUrl: './sivs.component.html',
  styleUrls: ['./sivs.component.css']
})
export class SIVsComponent implements OnInit {


 singlesiv: SIV = {
   PlateNumber: "A00111",
   ItemName:"Filter",
   Quantity:10,
   KM:"20200",
 }


 SIVEntries = SIVs;

 choosenSIV: SIV | undefined;



  constructor() { }

  ngOnInit(): void {

  }

  onChoose(siv: SIV):void{

    this.choosenSIV = siv;
  }

}
