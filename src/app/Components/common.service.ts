import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  URL = "http://localhost:3000/invetoryCollection"
  // Dependency injection 
  constructor( private _http : HttpClient) { }

  //Method to get all inventory list data
  getInvetoryList()
  {
    // console.log("Inside method call");
    return this._http.get(this.URL);
  }

  //Method to post data from form (this method add new item to inventory list )
  addItem(data)
  {
    return this._http.post(this.URL, data);
  }

  //display data in form for selected id
  getSelectedItem(id)
  {
    return this._http.get(`${this.URL}/${id}`);
  }

  //Delete item from list
  deleteItem(id)
  {
    return this._http.delete(`${this.URL}/${id}`)
  }

  //Update/ edit the item
  updateItem(id,data)
  {
   return  this._http.put(`${this.URL}/${id}`, data);
  }
}
