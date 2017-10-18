import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-sent',
  templateUrl: './one-sent.component.html',
  styleUrls: ['./one-sent.component.css']
})
export class OneSentComponent implements OnInit {
    @Input()  SingleSentRequest
  constructor() { }

  ngOnInit() {
  }

}
