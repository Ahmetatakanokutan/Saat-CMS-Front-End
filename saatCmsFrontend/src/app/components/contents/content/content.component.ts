import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents:Content[] = [];
  currentContent:Content = {id:0 , licenses:[] , name:"" , posterUrl:"" , status:"" , videoUrl:""};

  constructor(private contentService:ContentService ,  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{

        this.getAll();

    })
  }

  getAll(){
    return this.contentService.getAll().subscribe(response =>{

      this.contents = response.data;
    })
  }
  deleteContent(id:number){
    this.contentService.deleteContent(id).subscribe(response =>{})
  }


}
