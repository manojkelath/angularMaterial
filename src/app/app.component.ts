import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TestService, Element } from './services/test.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results;
  userData;
  displayedColumns = ['name', 'email', 'phone', 'company'];
  dataSource = new MatTableDataSource<Element>();

  constructor(private testService: TestService, private http: HttpClient) {
    testService.getUser().subscribe(data => {
      // Read the result field from the JSON response.
      this.userData = data;
      this.dataSource.data = this.userData;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

