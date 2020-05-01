import "firebase/auth";
import "firebase/database";

import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

import { ITask } from "./interfaces/itask";

@Component({
  selector: "app-root",
  template: `
    <pekao-header [user]="userX"></pekao-header>
    <app-pekao-list [user]="userX" [list]="list"></app-pekao-list>
    <pekao-section
      (emitTask)="addTask($event)"
      [taskList]="tasksList"
      (emitDone)="doneTask($event)"
      (emitRemove)="removeTask($event)"
      [tasksDone]="tasksDone"
    ></pekao-section>
    <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  userX: firebase.User = null;
  list: ITask[] = [];
  private listDbRef: firebase.database.Reference;

  ngOnInit() {
    this.firebaseInit();
  }

  firebaseInit() {
    const config = {
      // apiKey: 'AIzaSyBDb4PV8wFKHuzuMXk3Lxv6NtiF86Ya7YI',
      // databaseURL: 'https://todo-1d6f5.firebaseio.com/',

      apiKey: "AIzaSyBkvBYByvInYiNa_r0AXTWX8qI6zFvtVko",
      databaseURL: "https://todo-app-trzykomponenty.firebaseio.com/",
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      this.userX = firebaseUser;
      this.initListConnection();
    });
  }

  initListConnection() {
    if (this.userX) {
      this.listDbRef = firebase.database().ref("/users/" + this.userX.uid);
      this.listDbRef.on("value", (snapshot) => {
        this.list = snapshot.val().todoTasks as ITask[];
      });
    } else if (this.listDbRef) {
      this.listDbRef.off();
      this.list = [];
    }
  }
  /**events**/
  tasksList = [];
  tasksDone = [];
  addTask(task) {
    this.tasksList.push(task);
  }
  removeTask(task) {
    this.tasksList = this.tasksList.filter((e) => e !== task);
  }
  doneTask(task) {
    this.tasksDone.push(task);
    this.removeTask(task);
  }
}