import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department Detail
    </h3>
    <ul class="items">
      <li (click)= "onSelect(department)" [class.selected]= "isSelected(department)" *ngFor = "let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
    ''
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;
  departments = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "Angular2"},
    {"id" : 3, "name" : "Angular3"},
    {"id" : 4, "name" : "Angular4"},
    {"id" : 5, "name" : "Angular5"},
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });
  }
  onSelect(department: { id: any; }){
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  isSelected(department: { id: any; }){
    return department.id === this.selectedId;
  }
}
