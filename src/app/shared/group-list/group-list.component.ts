import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { admin } from 'src/app/core/interface';
import { mainService } from 'src/app/core/services/main-service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  formGroup: FormGroup;
  mainData: admin[];
  showForm = false;
  selectedItem: any;
  constructor(private fb: FormBuilder,
    private service: mainService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      id: [''],
    });
    this.getData();
  }
  deleteItem(item: admin) {
    this.service.DeleteData(item.id).subscribe((res) => {
      this.getData();
    })
  }
  getData() {
    this.service.getData().subscribe((res: any) => {
      console.log(res);
      this.mainData = res;
    })
  }
  onSubmit(form: FormGroup) {
    let data = form.getRawValue();
    if (this.selectedItem) {
      this.service.EditData(this.selectedItem.id, this.formGroup.getRawValue()).subscribe((res) => {
        this.getData();
        this.formGroup.reset();
        this.chooseToAdd();
      })
    } else {
      this.service.postData(data).subscribe((res: any) => {
        this.getData();
        this.formGroup.reset();
        this.chooseToAdd();
      })
    }
  }
  chooseToAdd() {
    this.showForm = !this.showForm;
  }
  editItem(item: admin) {
    this.chooseToAdd();
    this.formGroup.setValue(item);
    this.selectedItem = item;
  }

}
