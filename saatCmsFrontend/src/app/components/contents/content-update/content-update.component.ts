import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentDto } from 'src/app/models/contentDto';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-update',
  templateUrl: './content-update.component.html',
  styleUrls: ['./content-update.component.css']
})
export class ContentUpdateComponent implements OnInit {

  //updatedContent:ContentDto = {id:0 , name:"" , posterUrl:"" , videoUrl:""};
  constructor(private contentService:ContentService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  updateContent(Name:HTMLInputElement,
    PosterUrl:HTMLInputElement, VideoUrl:HTMLInputElement){

      let updatedContent:ContentDto = {
        id:this.activatedRoute.snapshot.params["contentId"],
        name:Name.value,
        posterUrl:PosterUrl.value,
        videoUrl:VideoUrl.value

      }
      location.assign("")
      this.contentService.updateContent(updatedContent).subscribe(response =>{
      })

    }
    goToLicences(){
      location.assign("http://localhost:4200/" + this.activatedRoute.snapshot.params["contentId"] + "/licences")
    }
}
