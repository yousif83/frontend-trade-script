import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-connection',
  templateUrl: './one-connection.component.html',
  styleUrls: ['./one-connection.component.css']
})
export class OneConnectionComponent implements OnInit {
  @Input()  singleConnection
  constructor() { }

  ngOnInit() {
    console.log(this.singleConnection)
  }

}
