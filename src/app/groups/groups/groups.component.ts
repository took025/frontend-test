import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainService } from 'src/app/core/services/main-service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  mainData: any = [];
  page = 1;
  limit = 5;
  secondData: any = [];
  constructor(private service: mainService,
    private fb: FormBuilder) {
  }
  title = 'frontend-test';
  ngOnInit(): void {
    this.service.paginate(this.page, this.limit).subscribe((res: any) => {
      console.log(res);
      this.secondData = res;
    })
  }
}
