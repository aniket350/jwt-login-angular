import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any = '';
  password: any = '';
  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }
  saveUser(){
 console.log(this.userName,this.password);
 this.userService.saveUser(this.userName,this.password).subscribe((response) => {
      console.log(response);
        if(response) {
          // console.log(response);
          // userForm.reset();
        }
      },(err) => {
        console.log(err);
    });
    }

    login()
  {
  this.userService.login(this.userName,this.password).subscribe((response) => {
  console.log(response)
          if(response){
            console.log(response);
            // userForm.reset();
          }
      });
  }
  }

