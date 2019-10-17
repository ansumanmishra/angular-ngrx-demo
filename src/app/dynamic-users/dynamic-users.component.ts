import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-dynamic-users',
  templateUrl: './dynamic-users.component.html',
  styleUrls: ['./dynamic-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicUsersComponent implements OnInit {

  @Input() dynamicUsers;
  
  constructor() { }

  ngOnInit() {
  }
}
