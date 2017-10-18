import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../httpRequests.service'

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  connectFlag = true
  receivedFlag = false
  sentFlag = false
  connections
  requests
  sentRequests

  setConnectFlag(){
    this.connectFlag=true
      this.receivedFlag=false
        this.sentFlag=false
  }
  setReceivedFlag(){
    this.connectFlag=false
      this.receivedFlag=true
        this.sentFlag=false
  }
  setPendingFlag(){
    this.connectFlag=false
      this.receivedFlag=false
        this.sentFlag=true
  }
  constructor(private HttpRequestsService: HttpRequestsService) { }

  ngOnInit() {
    this.HttpRequestsService.getConnections('connections')
    .subscribe(
      (response) => {
        console.log(response.json())
        this.connections=response.json()
      },
        (error) => console.log(error)
  )
  this.HttpRequestsService.getConnections('pending')
  .subscribe(
    (response) => {
      console.log(response.json())
      this.sentRequests=response.json()
    },
      (error) => console.log(error)
)
this.HttpRequestsService.getConnections('received')
.subscribe(
  (response) => {
    console.log(response.json())
    this.requests=response.json()
  },
    (error) => console.log(error)
)
  }

}
