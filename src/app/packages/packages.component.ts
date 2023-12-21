import { Component, OnInit } from '@angular/core';
import { TouristPackage } from '../tourist-package';
import { TouristPackageService } from '../tourist-package.service';
import { Tourist } from '../tourist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  msg: string = "";
  touristPackage: TouristPackage = new TouristPackage();
  touristPackages: TouristPackage[] = [];
  toBeDelete: boolean = false;
  constructor(private touristPackageService: TouristPackageService) { }


  ngOnInit(): void {
    this.getAlltouristPackages();
  }

  savetouristPackage() {
    this.msg = "";
    this.touristPackageService
      .savetouristPackage(this.touristPackage)
      .subscribe(response => {
        this.msg = response;
        this.touristPackage = new TouristPackage();
        this.getAlltouristPackages();
      });
  }

  getAlltouristPackages() {
    this.msg = "";
    this.touristPackageService
      .getAlltouristPackages()
      .subscribe(response => this.touristPackages = response);
  }

  editTouristPackage(index: number) {
    this.msg = "";
    this.touristPackage = this.touristPackages[index];
  };

  deleteTouristPackage(touristPackageId: number) {
    this.msg = "";
    this.toBeDelete = this.confirmDelete();

    if (this.toBeDelete) {
      this.touristPackageService
        .deleteTouristPackage(touristPackageId)
        .subscribe(response => { this.msg = response; this.getAlltouristPackages(); });
    } else {
      this.msg = "Deletion Cancelled!"
    }
  }

  confirmDelete() {
    this.msg = "";
    return confirm("Are you sure you want to delete?");
  }

  // autoCloseAlert(){
  //   window.setTimeout(function () {
  //     $(".alert").fadeTo(500, 0).slideUp(500, function () {
  //       $(this).remove();
  //     });
  //   }, 4000);
  // }
}
