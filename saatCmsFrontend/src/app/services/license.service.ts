import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentModel } from '../models/contentModel';
import { License } from '../models/license.';
import { LicenseDto } from '../models/licenseDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  apiUrl = "http://localhost:8080/api/licenses/"
  constructor(private httpClient:HttpClient) {

   }

  addLicense(licenseDto:LicenseDto){
    console.log(licenseDto.name)
    return this.httpClient.post<ContentModel<LicenseDto>>(this.apiUrl , licenseDto)
  }

  getAll(){

    return this.httpClient.get<ListResponseModel<License>>(this.apiUrl)
  }

  getLicensesByid(id:number){
    let newPath = this.apiUrl + "get_by_id?id=" + id;
    return this.httpClient.get<ListResponseModel<License>>(newPath)
  }
  addLicenseToContent(contentId:number , licenseId:number){
    let newPath = "http://localhost:8080/api/contents/" + contentId +"/licenses/" + licenseId +"/add"

    return this.httpClient.post(newPath , null)
  }
}
