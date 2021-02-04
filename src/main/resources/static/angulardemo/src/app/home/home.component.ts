import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { User } from '../user';
import { TutorialService } from '../tutorial.service';
import { max } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maxId = "";
  users: User[] = users;
  selectedIds = [];

  id: String = '';
  name: String = '';
  gender: String = '';
  age: Number | null = null;
  hobby: String = '';
  status: String = '';
  profession: String = '';

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
    // this.maxId = `${Number(this.users[this.users.length - 1].id) + 1}`;
    this.tutorialService.getAll().subscribe(data => {
      this.users = data;
      // console.log("this is user data :" + this.users);
    });
  }

  // update(){
  //   console.log('click update');
  // }

  // delete(){
  //   let user = this.users.find(x => x.id === this.id);
  //   if (user) {
  //     let idx = this.users.indexOf(user);
  //     if (idx > -1) {
  //       this.users.splice(idx, 1);
  //       this.reset();
  //     }
  //   }
  //   console.log('Updated data: ', this.users);
  // }

  delete() {
    let user = this.users.find(x => x.id === this.id);
    if (user) {
      let idx = this.users.indexOf(user);
      if (idx > -1) {
        this.users = this.users.filter(h => h !== user);
        this.tutorialService.deleteUser(user).subscribe();
        this.reset();
        console.log("delete" + idx);
      }
    }

  };

  update() {
    let user = this.users.find(x => x.id === this.id);
    if (user) {
      let idx = this.users.indexOf(user);
      if (idx > -1) {
        this.tutorialService.updateUser(this.id, this.name, this.age, this.gender, this.status, this.hobby, this.profession)
          .subscribe(user => {
            // this.users.push({
            this.id,
              this.name,
              this.gender,
              this.age,
              this.hobby,
              this.status,
              this.profession
          });
        console.log("id value:" + this.id, "name value:" + this.name, "hobby value:" + this.hobby);
      }
      this.ngOnInit();
      this.reset();
    }
  }

  add() {
    this.tutorialService.getMax().subscribe(id => {
      this.id = id;
      console.log("maxId value1:" + id);

      this.tutorialService.addUser(this.id, this.name, this.age, this.gender, this.status, this.hobby, this.profession)
        .subscribe(user => {
            this.id,
            this.name,
            this.gender,
            this.age,
            this.hobby,
            this.status,
            this.profession
        });
    });


    this.ngOnInit();
  }


  submit() {
    if (this.id == '') {
      this.users.push({
        id: this.maxId,
        name: this.name,
        gender: this.gender,
        age: this.age,
        hobby: this.hobby,
        status: this.status,
        profession: this.profession
      });
      this.maxId = `${Number(this.maxId) + 1}`;
    } else {
      let user = this.users.find(x => x.id === this.id);
      // this.tutorialService.updateUser(users).subscribe(data => {
      // console.log(data.name,data.age,data.gender,data.hobby,data.status,data.profession);
      if (user) {
        user.name = this.name;
        user.gender = this.gender;
        user.age = this.age;
        user.hobby = this.hobby;
        user.status = this.status;
        user.profession = this.profession;
        this.reset();
      }
    }
    console.log('Updated data: ', this.users);
  }

  reset() {
    this.id = '';
    this.name = '';
    this.gender = '';
    this.age = null;
    this.hobby = '';
    this.status = '';
    this.profession = '';

    this.selectedIds = [];
  }

  selectedId(id: String) {
    let selectedUser = this.users.find(x => x.id === id);
    if (typeof selectedUser !== 'undefined') {
      this.id = selectedUser.id;
      this.name = selectedUser.name;
      this.gender = selectedUser.gender;
      this.age = selectedUser.age;
      this.hobby = selectedUser.hobby;
      this.status = selectedUser.status;
      this.profession = selectedUser.profession;
    }
  }

}
