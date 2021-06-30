import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButttonComponent } from './buttton/buttton.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  declarations: [AppComponent, TextBoxComponent, ButttonComponent, HeaderComponent, TableComponent, DropdownComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
