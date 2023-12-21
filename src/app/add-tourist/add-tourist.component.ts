import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Tourist } from '../tourist';
import { TouristPackageService } from '../tourist-package.service';
import { TouristPackage } from '../tourist-package';

@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.css']
})
export class AddTouristComponent implements OnInit {
  msg: string = "";
  tourist: Tourist = new Tourist();
  touristPackages: TouristPackage[] = [];
  selectedPackage!: string;
  selectedBudget!: number;

  constructor(private touristService: TouristService, private touristPackageService: TouristPackageService) { }

  ngOnInit(): void {
    this.msg = "";
    this.tourist.budget = 120000;
    this.tourist.packageType = "Luxuary"; //this.touristPackages[0].packageName
    this.getAllTouristPackages();
  }
  saveTourist() {
    this.msg = "";
    this.touristService
      .saveTourist(this.tourist)
      .subscribe(response => this.msg = response);
    this.tourist = new Tourist();
    this.ngOnInit();
  }

  getAllTouristPackages() {
    this.msg = "";
    this
      .touristPackageService
      .getAlltouristPackages()
      .subscribe(response => this.touristPackages = response);
    // this.ngOnInit();
  }

  selectedPackageName(index: number) {
    // this.tourist.packageType = this.touristPackages[index].packageName;
    this.tourist.budget = this.touristPackages[index].budget;

  }

  selectedBudgetAmount(index: number) {
    // this.selectedBudget = this.touristPackages[index].budget;
    this.tourist.packageType = this.touristPackages[index].packageName;
  }
}