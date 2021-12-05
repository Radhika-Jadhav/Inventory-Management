import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  alert: boolean = false;

  EditItemForm = new FormGroup({
    name: new FormControl(),
    discription: new FormControl(),
    quantity: new FormControl(),
    price: new FormControl(),
  })
  constructor( private _CommonService : CommonService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this._CommonService.getSelectedItem(this.router.snapshot.params.id).subscribe((data)=>{
      console.log(data);
      this.EditItemForm = new FormGroup({
        name: new FormControl(data['name']),
        discription: new FormControl(data['discription']),
        quantity: new FormControl(data['quantity']),
        price: new FormControl(data['price']),
      })
    })
    }

    updateItem(){
      this._CommonService.updateItem(this.router.snapshot.params.id,this.EditItemForm.value).subscribe((data) => {
        console.log(data);
        this.alert = true;
      setTimeout(() => {
        this.closeAlert();
      }, 2000) // close message after one second...
      })
  }

  closeAlert() {
    // this.alert=false;
    this.alert = !this.alert;
  }


}
