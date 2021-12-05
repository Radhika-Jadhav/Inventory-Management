import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  alert: boolean = false;

  AddItemForm = new FormGroup({
    name: new FormControl(),
    discription: new FormControl(),
    quantity: new FormControl(),
    price: new FormControl(),
  })
  constructor(private _CommonService: CommonService) { }

  ngOnInit(): void {
  }
  ;
  addItem() {
    console.log(this.AddItemForm.value);
    this._CommonService.addItem(this.AddItemForm.value).subscribe((result) => {
      this.alert = true;
      setTimeout(() => {
        this.closeAlert();
      }, 2000) // close message after one second...
      this.AddItemForm.reset({})
      console.log("Inside service call", result);
    })
  }

  closeAlert() {
    // this.alert=false;
    this.alert = !this.alert;
  }
}
