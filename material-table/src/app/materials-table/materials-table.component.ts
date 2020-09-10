import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'
import { MattableserviceService } from '../service/mattableservice.service';

@Component({
  selector: 'app-materials-table',
  templateUrl: './materials-table.component.html',
  styleUrls: ['./materials-table.component.css']
})
export class MaterialsTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private service:MattableserviceService) { }
result:UserData[]=[];

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.result);

    this.service.getAll().subscribe((data:UserData[])=>
      {
        this.result=data;
        this.dataSource = new MatTableDataSource<UserData>(this.result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // users.push(data as unknown as UserData)
         console.log(this.result)
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
