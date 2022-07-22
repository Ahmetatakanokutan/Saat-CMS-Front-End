import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { License } from 'src/app/models/license.';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  licenses:License[] = [];
  constructor(private licenseService:LicenseService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.licenseService.getAll().subscribe(response =>{
      this.licenses = response.data;
    })
  }
  getLicenseByid(id:number){
    this.licenseService.getLicensesByid(id).subscribe(response => {
      this.licenses = response.data
    })
  }
  addLicenseToContent(licenseId:number){
    let contentId = this.activatedRoute.snapshot.params["contentId"]
    this.licenseService.addLicenseToContent(contentId , licenseId).subscribe(response =>{})

  }
}
