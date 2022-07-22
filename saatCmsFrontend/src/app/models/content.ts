import { License } from "./license."

export interface Content{

  id:number
  licenses:Array<License>
  name:string
  status:string
  posterUrl:string
  videoUrl:string
}
