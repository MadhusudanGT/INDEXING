import { Component, OnInit } from '@angular/core';
import { MattableserviceService } from '../service/mattableservice.service';

@Component({
  selector: 'app-addmattable',
  templateUrl: './addmattable.component.html',
  styleUrls: ['./addmattable.component.css']
})
export class AddmattableComponent implements OnInit {
  MatTable = {
    id: '',
    name: '',
    progress:'',
    color:''
  };
  submitted = false;
  constructor(private service:MattableserviceService) { }

  ngOnInit(): void {
  }
  savedata() {
    const data = {
      id: this.MatTable.id,
     name:this.MatTable.name,
     progress:this.MatTable.progress,
     color:this.MatTable.color
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newone() {
    this.submitted = false;
    this.MatTable = {
     id:'',
     name:'',
     progress:'',
     color:''
    };
  }

}
