import { Component, OnInit } from '@angular/core';
import { MattableserviceService } from '../service/mattableservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrls: ['./updatetable.component.css']
})
export class UpdatetableComponent implements OnInit {

  currentMatdata = null;
  message = '';
  constructor(private service:MattableserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getdata(this.route.snapshot.paramMap.get('id'));
  }

  getdata(id) {
    this.service.get(id)
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
          this.message = 'The data was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletedata() {
    this.service.delete(this.currentMatdata.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }
}
