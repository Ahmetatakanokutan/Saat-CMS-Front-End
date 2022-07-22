import { Component, OnInit } from '@angular/core';
import { ContentDto } from 'src/app/models/contentDto';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent implements OnInit {

  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
  }

  addNewContent(Name:HTMLInputElement,
    PosterUrl:HTMLInputElement, VideoUrl:HTMLInputElement){

      let newContent:ContentDto = {
        id:0,
        name:Name.value,
        posterUrl:PosterUrl.value,
        videoUrl:VideoUrl.value

      }

      location.assign("")
      return this.contentService.addNewContent(newContent).subscribe()

  }

}
