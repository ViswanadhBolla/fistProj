import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees:Employee[];
  constructor(private empservice:EmpService) { }

  ngOnInit(): void {
    this.employees=this.empservice.GetEmployees();
  }

  
}
