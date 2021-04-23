import { Component, OnInit} from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  

  public tasklist: Task []=[];

  ngOnInit(): void {
  }

  addTask(){
    this.tasklist.push(new Task());

  }

  removeTask(index:number){
    if(index > -1){
      this.tasklist.splice(index,1);
    }
  }

}
