import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  public collection:any;
  alert: boolean = false;
  constructor( private _CommonService: CommonService, private router : ActivatedRoute ) { }

  ngOnInit(): void {
    this._CommonService.getInvetoryList().subscribe((data)=>{
      this.collection = data;
      console.log(this.collection);
    });
  }

  deleteItem(id)
  {
    console.log("inside delete call");
    console.log(id);
    this._CommonService.deleteItem(id).subscribe((data)=> {
      console.log("Deleted item is", data);
      this.alert = true;
      this._CommonService.getInvetoryList().subscribe((data)=>{
        this.collection = data;
        console.log(this.collection);
        setTimeout(() => {
          this.closeAlert();
        }, 2000) // close message after one second...
      });
    })
  }

  closeAlert() {
    // this.alert=false;
    this.alert = !this.alert;
  }

}
