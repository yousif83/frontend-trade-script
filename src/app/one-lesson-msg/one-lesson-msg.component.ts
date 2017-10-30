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
      this.singleLessonMsg.lessonMessage = this.singleLessonMsg.lessonMessage.split(/(?=```)/)
      if (this.singleLessonMsg.lessonMessage.length >1) {
        this.singleLessonMsg.lessonMessage[1]=this.singleLessonMsg.lessonMessage[1].concat(this.singleLessonMsg.lessonMessage[2])
        this.singleLessonMsg.lessonMessage.pop()
        
          }
      }
  }
