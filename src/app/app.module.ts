import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { UpdateItemComponent } from './Components/update-item/update-item.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ListInventoryComponent } from './Components/list-inventory/list-inventory.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    UpdateItemComponent,
    PageNotFoundComponent,
    NavigationComponent,
    ListInventoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
