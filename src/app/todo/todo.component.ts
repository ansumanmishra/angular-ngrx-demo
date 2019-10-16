import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TodoComponent implements OnInit {

  @Input() todos;
  constructor() { }

  ngOnInit() {
  }

}
