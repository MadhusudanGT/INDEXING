import { Component, OnInit } from '@angular/core';
import { MattableserviceService } from '../service/mattableservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrls: ['./updatetable.component.css']
})
export class UpdatetableComponent implements OnInit {
  datafromcomp:UserData;
  currentMatdata:any;
  message = '';
  id:UserData;
  constructor(private service:MattableserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.service.getAll().subscribe((data:UserData[])=>
      {
      return data;
      })
      this.getdata()
      this.onOpen(this.id)
  }

  onOpen(data){
    if (typeof data == 'undefined') {
      console.log("item is undefined!");
    } else {
      this.datafromcomp=data;
    }
   console.log(this.datafromcomp+"user component data")
      }

  getdata() {
    this.service.get(this.id)
      .subscribe(
        data => {
          this.currentMatdata = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatedata() {
    this.service.update(this.currentMatdata.id, this.currentMatdata)
      .subscribe(
        response => {
          console.log(response);
        this.ngOnInit()
          this.message = 'The data was updated successfully!';
        },
        error => {
          console.log(error);
        });
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