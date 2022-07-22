import { Content } from "./content"

export interface License{
  id:number
  name:string
  startTime:string
  endTime:string
  contents:Array<Content>
}
