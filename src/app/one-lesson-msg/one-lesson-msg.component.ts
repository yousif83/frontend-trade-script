import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-lesson-msg',
  templateUrl: './one-lesson-msg.component.html',
  styleUrls: ['./one-lesson-msg.component.css']
})
export class OneLessonMsgComponent implements OnInit {
@Input() singleLessonMsg

  constructor() { }
  ngOnInit() {
  
  }

}
