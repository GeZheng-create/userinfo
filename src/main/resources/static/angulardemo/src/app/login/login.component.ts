import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  username: any;
  password: any;
  // public list:Array<Object> =[];
  // public searchedItem: any;

  constructor(private router: Router) {
  }

  login() {
    this.router.navigateByUrl('/home');
    // if (this.username == "admin" && this.password == "admin") {
    //   this.router.navigateByUrl('/home');
    // } else if (this.username == null || this.username == "") {
    //   alert("Please input username!");
    // } else if (this.password == null || this.password == "") {
    //   alert("Please input password!");
    // } else {
    //   alert("Wrong username or password!");
    // }
  };

}

