import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-one-connection',
  templateUrl: './one-connection.component.html',
  styleUrls: ['./one-connection.component.css']
})
export class OneConnectionComponent implements OnInit {
  @Input()  singleConnection

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.singleConnection)
  }
  startLesson(){
     this.router.navigate([`./lesson/${this.singleConnection._id}/${this.singleConnection.name}`]);
  }
}
