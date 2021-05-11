import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers: [UsersService]
})
export class AssignmentComponent implements OnInit{
  activeUsers: {} [] = [];
  inactiveUsers: {} [] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers
    this.inactiveUsers = this.usersService.inactiveUsers
  }
}
