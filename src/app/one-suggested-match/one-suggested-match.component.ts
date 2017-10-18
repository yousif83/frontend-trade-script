import { Component, OnInit, Input } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service';
import {Router} from '@angular/router';
import 'rxjs/Rx';
@Component({
  selector: 'app-one-suggested-match',
  templateUrl: './one-suggested-match.component.html',
  styleUrls: ['./one-suggested-match.component.css']
})
export class OneSuggestedMatchComponent implements OnInit {
  @Input() suggestedMatch

  @Input() allMacthes

  constructor(private HttpRequestsService: HttpRequestsService, private router: Router) { }
  addConnect() {

     this.HttpRequestsService.addConnects(this.suggestedMatch._id)
    .subscribe(
      response => {

   for (var i = 0; i < this.allMacthes.length; i++) {
     if (this.allMacthes[i]._id == this.suggestedMatch._id) {
       this.allMacthes.splice(i, 1);
       i--
     }
   }
        console.log(response.json()),
        (error) => console.log(error)
  })

  }
  ngOnInit() {
    console.log(this.allMacthes)
  }

}
