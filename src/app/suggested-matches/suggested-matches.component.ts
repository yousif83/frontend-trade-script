import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'

@Component({
  selector: 'app-suggested-matches',
  templateUrl: './suggested-matches.component.html',
  styleUrls: ['./suggested-matches.component.css']

})
export class SuggestedMatchesComponent implements OnInit {

  constructor(private HttpRequestsService: HttpRequestsService) { }

 matches


  ngOnInit() {
    this.HttpRequestsService.getUsers()
    .subscribe(
      (response) => {
        console.log(response.json())
        this.matches=response.json()
      },
        (error) => console.log(error)
  )
  }

}
