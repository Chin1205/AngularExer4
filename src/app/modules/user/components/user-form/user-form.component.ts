import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  model:User = 
  {
    email: '',
    name: '',
    bio: '',
    active: true 
  };

  submit() {
    console.log(this.model)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
