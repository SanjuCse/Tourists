import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Tourist } from '../tourist';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-tourists',
  templateUrl: './list-tourists.component.html',
  styleUrls: ['./list-tourists.component.css']
})
export class ListTouristsComponent implements OnInit {
  tourists: Tourist[] = [];
  msg: string = "";
  editTourist: Tourist = new Tourist();

  constructor(private touristService: TouristService, private router: Router) { }

  ngOnInit(): void {
    this.touristService
      .getAllTourists()
      .subscribe(response => this.tourists = response);
  }

  goToAddTouristPage() {
    this.router.navigate(['/', 'addtourist']);
  }

  getTouristByIndex(tid: number) {
    // this.touristService
    //   .getTouristById(tid)
    //   .subscribe(response => this.editTourist = response);
    this.editTourist = this.tourists[tid];
  }

  editTouristPut() {
    this.touristService
      .editTourist(this.editTourist)
      .subscribe(response => this.msg = response);

  }

  deleteTourist(tid: number) {

  }
}
