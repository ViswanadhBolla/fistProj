import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstnumber : number;
  firstName : string ="";
  salary : number;
  image:string;
  pwd:string;
  msg:string;
  constructor() { 
    this.firstnumber=10;
    this.image="../../assets/images/senku.jfif";
  }

  ngOnInit(): void {
  }

  validate():void{
    // {{debugger}}
    this.msg = "hello "+this.firstName;
  }

}
