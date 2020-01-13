import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { ITask } from './../interfaces/itask';

@Component({
  selector: 'app-pekao-list',
  templateUrl: './pekao-list.component.html',
  styleUrls: ['./pekao-list.component.scss']
  
})
export class PekaoListComponent implements OnInit {
  @Input() list: ITask[];
  @Input() user: firebase.User;

  constructor() { }

  ngOnInit() {
  }

  toggleTask(index: number, wasFinished: boolean){
    firebase.database().ref(`users/${this.user.uid}/todoTasks/${index}/finished`).set(!wasFinished);
  }

}
