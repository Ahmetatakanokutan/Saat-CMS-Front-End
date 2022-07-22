import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../models/content';
import { ContentDto } from '../models/contentDto';
import { ContentModel } from '../models/contentModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  content:Content = {id:0 , licenses:[] , name:"" , posterUrl:"" , status:"" , videoUrl:""};
  apiUrl = "http://localhost:8080/api/contents/"
  constructor(private httpClient:HttpClient) { }

  getAll(){

    return this.httpClient.get<ListResponseModel<Content>>(this.apiUrl)
  }

  addNewContent(contentDto:ContentDto){

    return this.httpClient.post<ContentModel<ContentDto>>(this.apiUrl , contentDto)
  }
  getContentByid(id:number){
    let newPath = this.apiUrl + id;
    return this.httpClient.get<ContentModel<Content>>(newPath)
  }

  updateContent(contentDto:ContentDto):Observable<object>{

    let newPath = this.apiUrl
    return this.httpClient.put(newPath , contentDto)
  }
  addLicenseToContent(contentId:number , licenseId:number){
      let newPath = this.apiUrl + contentId + "/licenses/" + licenseId
      return this.httpClient.post(newPath , null)
  }
  deleteContent(id:number){
    let newPath = this.apiUrl + id
    return this.httpClient.delete(newPath)
  }


}
