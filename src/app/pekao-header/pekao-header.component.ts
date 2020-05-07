import "firebase/auth";
import "firebase/database";
import { Component, Input, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Component({
  selector: "pekao-header",
  templateUrl: "./pekao-header.component.html",
  styleUrls: ["./pekao-header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() user: firebase.User;
  login = ""; //TODO
  password = ""; //TODO

  constructor() {}

  ngOnInit() {}

  onLogin() {
    firebase.auth().signInWithEmailAndPassword(this.login, this.password);
  }

  onLogout() {
    firebase.auth().signOut();
  }
}
