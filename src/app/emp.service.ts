import { Injectable } from '@angular/core';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
emp:Employee;
emplist:Employee[]=[{eid:101,ename:"Ram",salary:89000,doj:new Date("2/2/2022"),d:{did:1,dname:"cse"}},
{eid:101,ename:"Ram",salary:89000,doj:new Date("2/2/2022"),d:{did:1,dname:"cse"}}];
  constructor() { }

  GetEmployees():any{
    return this.emplist;
  }

  AddEmployee(e:Employee):void{
    this.emplist.push(e);
  }
}
