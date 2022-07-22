import { Component, OnInit, SecurityContext } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  safeUrl:SafeResourceUrl = {};
  currentContent:Content = {id:0 , licenses:[] , name:"" , posterUrl:"" , status:"" , videoUrl:""};

  constructor(private contentService:ContentService , private activatedRoute:ActivatedRoute, private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentContent.videoUrl)
  }

  ngOnInit(): void {
    this.setVideoUrl();
  }
  getVideoUrl(){

      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentContent.videoUrl)
  }
  setVideoUrl(){
      this.activatedRoute.params.subscribe(param =>{
        this.contentService.getContentByid(param["contentId"]).subscribe(response =>{
          this.currentContent = response.data
          this.getVideoUrl()
        })

      })
  }
}
