import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { roles } from 'src/app/core/interface';
import { mainService } from 'src/app/core/services/main-service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  mainData: roles[];
  page = 1;
  limit = 5;
  formGroup: FormGroup;
  paginateArray = new Array();
  selectedItem: roles;
  isSelectedItem: boolean = false;
  @ViewChild('nameInput') input: ElementRef;
  constructor(private service: mainService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      selected: [false, Validators.required]
    });
    this.getData(this.page)
  }
  valueChange(e: any) {
    const data = e.target.value;
    this.service.search(data).subscribe((res: any) => {
      this.mainData = res;
      console.log(res);

    })
  }
  showMarked() {
    this.mainData = this.mainData.filter((obj: roles) => {
      return obj.selected === true;
    });
    console.log(this.mainData);
  }

  deleteItem(item: roles) {
    this.service.DeleteRole(item.id).subscribe((res: any) => {
      this.getData(this.page);
    })
  }

  editItem(item: any) {
    this.selectedItem = item;
    this.formGroup.setValue(item);
    this.isSelectedItem = true;
    this.input.nativeElement.focus();
  }

  getData(page: number, limit?: number) {
    this.service.getRoles().subscribe((res: any) => {
      this.mainData = res;
    });
  }
  submitForm(formGroup: FormGroup) {
    if (this.isSelectedItem) {
      this.service.EditRoles(this.selectedItem.id, this.formGroup.getRawValue()).subscribe((res: any) => {
        this.getData(this.page);
      })
    } else {
      this.service.postRoles(this.formGroup.getRawValue()).subscribe((res: any) => {
        this.formGroup.reset();
        this.getData(this.page);
      })
    }
    this.formGroup.reset();
    this.isSelectedItem = false;
  }
}
