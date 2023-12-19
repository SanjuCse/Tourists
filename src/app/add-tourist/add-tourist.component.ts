import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.css']
})
export class AddTouristComponent implements OnInit {
  msg: string = "";
  tourist: Tourist = new Tourist();
  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.tourist.budget = 100000;
    this.tourist.packageType = "Luxuary";
  }
  saveTourist() {
    this.touristService
      .saveTourist(this.tourist)
      .subscribe(response => this.msg = response);
    this.tourist = new Tourist();
    this.ngOnInit();
  }
}