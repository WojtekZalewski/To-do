import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "pekao-section",
  templateUrl: "./pekao-section.component.html",
  styleUrls: ["./pekao-section.component.scss"],
})
export class PekaoSectionComponent implements OnInit {
  newTask;
  @Output() emitTask = new EventEmitter();
  @Input() taskList = [];
  @Output() emitDone = new EventEmitter();
  @Output() emitRemove = new EventEmitter();
  @Input() tasksDone = [];

  constructor() {}

  ngOnInit() {}

  addTask() {
    this.emitTask.emit(this.newTask);
    this.newTask = " ";
  }

  removeTask(task) {
    this.emitRemove.emit(task);
  }

  doneTask(task) {
    this.emitDone.emit(task);
  }
}
