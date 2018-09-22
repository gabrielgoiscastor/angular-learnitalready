import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreateStatus = 'Nothing...';
  serverName = '';
  serverCreated = false;

  constructor() {

    //allow new servers after 2 seconds
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreateStatus = "Yey! Server name " + this.serverName;
    this.serverCreated = true;
  }

}
