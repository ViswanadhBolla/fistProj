import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
e:Employee = {eid: 0, ename: "", salary: 0, doj: new Date(), d: { did: 0, dname: "ssfssd" }};
  constructor(private empService:EmpService, private router: Router) { }

  ngOnInit(): void {
  }

  AddEmp():void{
    // {{debugger}}
    console.log(this.e)
    this.empService.AddEmployee(this.e);
    alert("Successfully added")
    this.router.navigate(["GetEmp"]);
  }

}
