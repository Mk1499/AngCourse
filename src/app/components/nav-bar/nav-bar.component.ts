import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const BooksQuery = gql`
query{
  books{
    id
    name
  }
}
`;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {

  books: any;

  // private querySubscribtion: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
this.apollo.watchQuery<any>({
      query: BooksQuery
    }).valueChanges.subscribe(({data,loading}) => {
      console.log("Data  : ",data);
      console.log("Loading : ", loading);  
    })
  }

  

}
