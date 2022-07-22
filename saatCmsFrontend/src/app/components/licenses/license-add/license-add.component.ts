import { Component, OnInit } from '@angular/core';
import { License } from 'src/app/models/license.';
import { LicenseDto } from 'src/app/models/licenseDto';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-license-add',
  templateUrl: './license-add.component.html',
  styleUrls: ['./license-add.component.css']
})
export class LicenseAddComponent implements OnInit {

  constructor(private licenseService:LicenseService) { }

  ngOnInit(): void {
  }

  addLicense(Name:HTMLInputElement , StartTime:HTMLInputElement , EndTime:HTMLInputElement){

    let license:LicenseDto = {
      id:0,
      name:Name.value,
      startTime:StartTime.value,
      endTime:EndTime.value
     }
     location.assign("")
    return this.licenseService.addLicense(license).subscribe()

  }
}
