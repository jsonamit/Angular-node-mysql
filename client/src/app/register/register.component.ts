import { Component, OnInit } from '@angular/core';
import {Userservice} from '../services/user';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addForm:FormGroup;
  username:string;
  email:string;
  password:string;
  statusMassege:string;
  constructor(private userservice:Userservice,private FB:FormBuilder)
  {
    this.addForm=this.FB.group({
      username:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
    });
  }

  ngOnInit() {
  }
  register()
  {
    let user=this.addForm.value;
    this.userservice.userregister(user).subscribe(
      res=>{
        if (res) {
          this.statusMassege="Data inserted";
          console.log(this.statusMassege);
          this.addForm.reset();
        }
        else {
          this.statusMassege="Data not inserted";
          console.log(this.statusMassege);
        }
      }
    );

  }
}
