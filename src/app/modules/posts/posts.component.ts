import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table'  
import { MatSort } from '@angular/material/sort';
import { NumberInput } from '@angular/cdk/coercion';
import { MatPaginator } from '@angular/material/paginator';

interface IPosts {
  id: string;
  author: string;
  title: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  dataSource: MatTableDataSource<IPosts> = new MatTableDataSource<IPosts>([]);
  posts: IPosts[] = [];
  columns: string [] = ['id', 'author', 'title', 'category', 'date'];
  
  @ViewChild(MatSort, { static: true }) sort = new MatSort();
strictNullChecks: NumberInput;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;



  constructor() { 
    //TODO: This data should be coming from an API using Angular Services
    this.posts = [{
      id: '1',
      author: 'Laura Uzum',
      title: 'First Post',
      category: 'Uncategorized',
      date: '2023-01-11 10:10:10',
    },
    {
      id: '2',
      author: 'Laura Uzum',
      title: 'Second Post',
      category: 'Uncategorized',
      date: '2023-01-12 10:10:10',
    },
    {
      id: '3',
      author: 'Laura Uzum',
      title: 'Third Post',
      category: 'Uncategorized',
      date: '2023-01-13 10:10:10',
    }];
    this.dataSource = new MatTableDataSource(this.posts);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
