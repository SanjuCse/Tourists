import { Component, OnInit } from '@angular/core';
import { TouristPackage } from '../tourist-package';
import { TouristPackageService } from '../tourist-package.service';
import { Tourist } from '../tourist';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  msg: string = "";
  touristPackage: TouristPackage = new TouristPackage();
  touristPackages: TouristPackage[] = [];
  constructor(private touristPackageService: TouristPackageService) { }


  ngOnInit(): void {
    this.getAlltouristPackages();
  }

  savetouristPackage() {
    this.touristPackageService
      .savetouristPackage(this.touristPackage)
      .subscribe(response => {
        this.msg = response;
        this.touristPackage = new TouristPackage();
        this.getAlltouristPackages();
      });
  }

  getAlltouristPackages() {
    this.touristPackageService
      .getAlltouristPackages()
      .subscribe(response => this.touristPackages = response);
  }

  getTouristById(tid: number) { };

  editTouristPackage(index: number) {
    this.touristPackage = this.touristPackages[index];
  };

  deleteTouristPackage() { };
}
