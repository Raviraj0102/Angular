import { Component } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-ng-for-obj',
  templateUrl: './ng-for-obj.component.html',
  styleUrl: './ng-for-obj.component.css'
})
export class NgForObjComponent {

  emps:Employee[] =[
    new Employee(101,"Ravi",150000.00),
    new Employee(102,"Raj",1304040),
    new Employee(103,"Raju",1800000.00)

  ];

}
