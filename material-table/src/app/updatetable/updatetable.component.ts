import { Component, OnInit } from '@angular/core';
import { MattableserviceService } from '../service/mattableservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrls: ['./updatetable.component.css']
})
export class UpdatetableComponent implements OnInit {
  datafromcomp:UserData;
  currentMatdata:UserData;
  message = '';
  strigfyeddata=''
  id:UserData;
  constructor(private service:MattableserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getdata();
  }

  getdata(){
    this.service.getAll().subscribe((data:UserData[])=>
    {
      return data;
    }) 
  }

  onOpen(data){
    if (typeof data == 'undefined') {
      console.log("item is undefined!");
    } else {
      this.datafromcomp=data;
      this.strigfyeddata=JSON.stringify(this.datafromcomp)
      this.currentMatdata=JSON.parse(this.strigfyeddata);
      console.log(this.currentMatdata)
      
    }
      }

  updatedata() {
    this.service.update(this.currentMatdata.id, this.currentMatdata)
      .subscribe(
        response => {
          console.log(response);
          
          this.message = 'The data was updated successfully!';
        },
        error => {
          console.log(error);
          this.message = 'please check the code!';
        });
         window.location.reload();
  }

BACK(){
  this.router.navigate(['/']);
}
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}