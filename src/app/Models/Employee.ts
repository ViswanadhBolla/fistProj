import { Department } from "./Department";


export interface Employee{
    eid:number;
    ename : string;
    salary:number;
    doj:Date;
    d:Department;
}