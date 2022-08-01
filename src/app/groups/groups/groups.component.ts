import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { roles } from 'src/app/core/interface';
import { mainService } from 'src/app/core/services/main-service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  formGroup: FormGroup;
  mainData: any = [];
  page = 1;
  limit = 5;
  secondData: roles[];
  paginateArray = new Array();

  constructor(private service: mainService,
    private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.paginate();
  }

  paginate(page?: number) {
    console.log(page);
    
    if (page) {
      this.page = page;
    };
    this.service.paginate(this.page, this.limit).subscribe((res: any) => {
      console.log(res);
      this.secondData = res;
      this.countpaginate();
    })
  }

  countpaginate() {
    this.paginateArray = [];
    this.service.getRoles().subscribe((res) => {
      var sum = Math.ceil(res.length / this.limit);
      var zero = 0;
      while (sum > 0) {
        sum -= 1;
        zero += 1;
        var arr = [];
        arr.push(zero);
        this.paginateArray.push(zero);
        console.log(res);
      }
    })
  }
}
