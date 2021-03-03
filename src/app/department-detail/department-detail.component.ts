import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      Your selected department with id = {{departmentId}}
    </h3>
    
    <p>
      <button (click)="showOverview()"> Overview </button> 
      <button (click)="showContact()"> Contact </button>
    </p>

    <router-outlet></router-outlet>

    <button (click)="goPrevious()">
      Previous
    </button>
    <button (click)="goNext()">
      Next
    </button>
    <br>
    <div>
      <button (click)= "gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  'a{ width: 70px !important; line-height: 20px !important; height: 20px !important; padding: 3px 10px !important; border-radius: 10px !important; text-decoration: none !important; font-weight: bold !important; font-family: "Courier New", Courier, monospace !important; letter-spacing: 1px, !important; background: grey !important; color: white !important; margin: 0px 10px  !important; cursor: pointer !important;}',
  'div{margin: 20px}',
  'button{margin: 5px 10px; }'
  ]
  
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any | undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.departmentId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = params.get('id');
    });

  }
  goPrevious(){
    this.router.navigate(['/departments', --this.departmentId]);
  }

  goNext(){
    this.router.navigate(['/departments', ++this.departmentId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route });
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
