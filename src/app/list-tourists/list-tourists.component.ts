import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-list-tourists',
  templateUrl: './list-tourists.component.html',
  styleUrls: ['./list-tourists.component.css']
})
export class ListTouristsComponent implements OnInit {
  tourists: Tourist[] = [];
  msg: string = "";
  constructor(private touristService: TouristService) { }
  ngOnInit(): void {
    this.touristService
      .getAllTourists()
      .subscribe(response => this.tourists = response);
  }

  editTourist(tid: number) {
    // this.touristService.
  }

  deleteTourist(tid: number) {

  }
}